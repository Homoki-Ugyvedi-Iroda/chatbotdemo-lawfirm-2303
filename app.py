import os
import openai
import json
import re
import bleach
from flask import Flask, redirect, render_template, request, url_for
from flask_limiter import Limiter

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('FL_SECRET_KEY')
openai.api_key = os.getenv("OPENAI_API_KEY")

limiter = Limiter(
    app=app,
    key_func=lambda: request.remote_addr,
    default_limits=["1000 per day"],
    storage_uri="memory://"
)

error_mapping = {
    openai.error.AuthenticationError: "The service is not accessible, please try again later! [Authentication Error]",
    openai.error.RateLimitError: "Too many requests sent by the demo or server overloaded, please try again later! [RateLimit Error]",
    openai.error.InvalidRequestError: "There was a problem with the format of the request sent. We might receive this error also when the OpenAI API is overloaded. Please try again later! [InvalidRequest Error]",
    openai.error.APIConnectionError: "There was a problem with accessing the OpenAI API. Please try again later! [APIConnectionError]",
    openai.error.ServiceUnavailableError: "There was a problem with accessing the OpenAI API (service unavailable). Please try again later! [ServiceUnavailable Error]",
    openai.error.Timeout: "The response has not been received in time (timeout). Please try again later! [Timeout]",
    openai.error.OpenAIError: "Some general error with OpenAI happened. [InvalidRequest Error: 400]",
    Exception: "Some general error not related to OpenAI happened."
}

def handle_error(error, message):
    response_chatbot = message + " Error logged, no need to report it."
    print(f"https://platform.openai.com/docs/guides/error-codes/python-library-error-types Error", error)
    return response_chatbot

def text_to_json(filename):
    with open(filename, encoding='utf-8', mode='r') as file:
        text_data = json.load(file)
    return text_data

def convert_urls_to_hyperlinks(text: str) -> str:
    ALLOWED_TAGS = bleach.sanitizer.ALLOWED_TAGS.union(['a'])
    ALLOWED_ATTRIBUTES = {
        **bleach.sanitizer.ALLOWED_ATTRIBUTES,
        'a': ['href', 'title', 'target']
    }
    text = bleach.clean(text, tags=ALLOWED_TAGS, attributes=ALLOWED_ATTRIBUTES, strip=True)
    url_pattern = re.compile(
        r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+'
    )
    email_pattern = re.compile(
        r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
    )
    urls = url_pattern.findall(text)
    for url in urls:
        text = text.replace(url, f'<a href="{url}" target="_blank">{url}</a>')
    emails = email_pattern.findall(text)
    for email in emails:
        text = text.replace(email, f'<a href="mailto:{email}">{email}</a>')
    return text


def construct_prompt_chat_gpt(user_input):
    prompt_qa_examples = text_to_json(
        os.path.join(os.getcwd(), 'static', 'prompt_qa_examples.json'))
    with open(os.path.join(os.getcwd(), 'static', 'prompt_instructions.txt'), encoding='utf8',
              mode='r') as f:
        prompt_instructions = f.read()

    messages = [
        {
            "role": "system",
            "content": "Give your answers as if you were an experienced, measured lawyer whose name is Dr. ChatBotLLMCIPPEetc who pretends to be a partner of a law firm named ""Homoki Ügyvédi Iroda"", which is a Hungarian law firm"
        },
        {
            "role": "user",
            "content": prompt_instructions + '\n\n' + prompt_qa_examples[0]["q"]
        },
        {
            "role": "assistant",
            "content": prompt_qa_examples[0]["a"]
        }
    ]
    for i in range(1, len(prompt_qa_examples)):
        messages.append({
            "role": "user",
            "content": prompt_qa_examples[i]["q"]
        })
        messages.append({
            "role": "assistant",
            "content": prompt_qa_examples[i]["a"]
        })
    messages.append({
        "role": "user",
        "content": user_input
    })
    return messages


@app.route("/", methods=("GET", "POST"))
def index():
    response_chatbot: str = ""
    if request.method == "POST":
        user_input_truncated = request.form["user_input"][0:2048]
        messages = construct_prompt_chat_gpt(user_input_truncated)
        try:
            completion = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                # model="gpt-4",
                max_tokens=2500,
                # when using gpt-3.5, should be 4096 minus the messages size, including prompt and max. question size
                messages=messages,
                temperature=0.0
            )
            response_chatbot = completion['choices'][0]['message']['content']
            return redirect(url_for("index", result=response_chatbot))

        except tuple(error_mapping.keys()) as error:
            response_chatbot = handle_error(error, error_mapping[type(error)])

    response_chatbot = request.args.get("result")
    if response_chatbot is None:
        return render_template("index.html")
    response_chatbot = convert_urls_to_hyperlinks(response_chatbot)
    return render_template("index.html", result=response_chatbot)
