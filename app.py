import os
import openai
import json
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
openai.api_key = os.getenv("OPENAI_API_KEY")

def text_to_json(filename):
    with open(filename, encoding='utf-8', mode='r') as f:
        text_data = json.load(f)
    return text_data

def construct_prompt_chat_gpt(user_input):
    prompt_qa_examples = text_to_json('/home/HomokiPeter/chatbotdemo-lawfirm-2303/static/prompt_qa_examples.json')
    with open('/home/HomokiPeter/chatbotdemo-lawfirm-2303/static/prompt_instructions.txt', encoding='utf8', mode='r') as f:
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
    if request.method == "POST":
        messages = construct_prompt_chat_gpt(request.form["user_input"])

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            #max_tokens = 4096,
            messages = messages,
            temperature = 0.2
        )
        response_chatbot = completion['choices'][0]['message']['content']
        return redirect(url_for("index", result=response_chatbot))

    response_chatbot = request.args.get("result")

    return render_template("index.html", result=response_chatbot)

