let language_used = "HU";

const translations = {
  HU: {
    prWhatToDo: "Kérem, hogy az alábbi dobozba írja a kérdését. (A 2048 karaktert meghaladó részt figyelmen kívül hagyjuk.) A válasz kb. 10-15 másodpercen belül meg szokott érkezni, hacsak nincsen túlterhelve az OpenAI szervere.",
    sendBtnLabel: "Elküldöm",
    intro: "Üdvözlöm, dr. ChatBotLLMCIPPEetc vagyok, egy magát ügyvédnek tettető chatbot. A Homoki Ügyvédi Iroda tett közzé ezen a felületen, hogy kísérletezzen, mennyiben lehet ilyen célokra használni a ChatGPT 3.5 modelljét. Az ügyvédi iroda kizárólag informatikai jogi ügyekkel foglalkozik, és ezen a területen Magyarország, valamint általánosságban az Európai Unió jogával kapcsolatosan adhatnak tanácsot. Az iroda magyar és angol nyelven dolgozik, ilyen nyelven tehet fel kérdéseket és fogok válaszolni. Nem vagyok ügyvéd, és jogi tanácsot sem adhatok, de olvassa el a felhasználási feltételeket.",
    toSLabel: "Felhasználási feltételek",
    toScontent: "<p>Ez egy korlátozott idejű kísérlet, amely legkésőbb 2023. június 30-ig lesz elérhető, de bármikor megszűnhet, különösen ha túl sok kérés az ügyvédi iroda túl sok pénzét használja el.</p><p>Valódi célokra ne használja a chatbotot, így különösen jogi tanácsadásra vagy más jogi szolgáltatás igénybe vételére. Csak arra használják, hogy azt lássuk, hogy mennyiben lehet vagy nem lehet az OpenAI ezen nagyon népszerű modelljét ilyen célokra használni.</p><p>Az adatkezelési feltételek <a href=https://homoki.net/assets/files/chatbot_privacy_notice.html target=_blank>itt</a> érhetőek el. Ha bármilyen információt szeretne megosztani a Homoki Ügyvédi Irodával a chatbot használatával kapcsolatosan (beleértve a panaszokat is), kérem a <a href=mailto:chatbot@homoki.net>chatbot@homoki.net</a> címre küldje. Azonban az erőforrások hiánya és az ügyvédi iroda kis mérete, a szolgáltatás ingyenessége és a kísérleti jelleg miatt a Homoki Ügyvédi Iroda nem ígéri, hogy bármilyen választ ad, ide nem értve a magyarországi jogszabályok vagy etikai szabályok által kötelezően előírt eseteket.</p><p>A forrás a <a href=https://github.com/Homoki-Ugyvedi-Iroda/chatbotdemo-lawfirm-2303 target=_blank>GitHub</a> címen érhető el. Ez a chatbot AI-t használ, és a modell korlátairól lásd <a href=https://openai.com/blog/chatgpt#limitations target=_blank>OpenAI</a> közlését.</p>",
    },
  EN: {
    prWhatToDo: "Please kindly enter your questions below. (Anything beyond 2048 character is ignored.) The answer should arrive in 10-15 seconds, unless the OpenAI server is overloaded.",
    sendBtnLabel: "Submit",
    intro: "My name is Dr. ChatBotLLMCIPPEetc, I am a chatbot pretending to be a lawyer. Homoki Law Firm has published me here to experiment how ChatGPT 3.5 model can be used for chatbot purposes. The law firm deals exclusively with IT related legal matters, and within this area, they may advise on Hungarian law and European Union law not specific to another jurisdiction. The firm works in Hungarian and English, so you may ask questions in these languages. I am not a lawyer and cannot give legal advice, but please read the terms of use below.",
    toSLabel: "Terms of Use",
    toScontent: "<p>This is an experiment that is available for a limited time, but not later than until 30 June 2023, and can be terminated at any time for any reasons, especially if too many requests use up too much of the money of the firm.</p><p>Do not use this chatbot for any real purposes, including for trying to get legal advice or legal services. Use this chatbot only to see for yourself why or why not this very popular model provided by OpenAI can or cannot be used for such purposes.</p><p>The privacy notice is available <a href=https://homoki.net/assets/files/chatbot_privacy_notice.html target=_blank>here</a>. If you would like to submit any information (including complaints) to Homoki Ügyvédi Iroda in relation to your use of this chatbot, please send that to <a href=mailto:chatbot@homoki.net>chatbot@homoki.net</a> However, due to the lack of resources, the small size of the firm and the free of charge, experimental nature of this service, Homoki Ügyvédi Iroda cannot promise that they will provide you any response at all, other than in cases where this is mandatory by law or by deontology rules applicable to lawyers in Hungary.</p><p>The source is available at <a href=https://github.com/Homoki-Ugyvedi-Iroda/chatbotdemo-lawfirm-2303 target=_blank>GitHub</a>. This chatbot uses an AI, and for the limitations of the chatbot, see <a href=https://openai.com/blog/chatgpt#limitations target=_blank>OpenAI's</a> disclosure.</p>",
    }
};

function updateLanguage(lang) {
    if (typeof lang == 'undefined') {
       lang = "HU";
    }
    document.getElementById("prWhatToDo").textContent = translations[lang].prWhatToDo;
    document.getElementById("sendBtn").value = translations[lang].sendBtnLabel;
    document.getElementById("intro").textContent = translations[lang].intro;
    document.getElementById("ToSLabel").textContent = translations[lang].toSLabel;
    document.getElementById("ToSContent").innerHTML = translations[lang].toScontent;
}

function resetWindow() {
    window.location.href = 'https://chatbotdemo.homoki.net/';
}

function languageToggle() {
const button = document.getElementById("language-button");
  if (button.innerText === "to English") {
      language_used = "EN";
	  button.innerText = "magyarra";
      updateLanguage(language_used);
} else {
      language_used = "HU";
      button.innerText = "to English";
	  updateLanguage(language_used);
    }
  }

document.addEventListener('DOMContentLoaded', function() {
     setTimeout(updateLanguage, 100);
});