language_used = "HU"
const PrWhatToDo_HU = "Kérem, hogy az alábbi dobozba írja a kérdését.";
const PrWhatToDo_EN = "Please kindly enter your questions below.";
const SendBtnLabel_HU = "Elküldöm";
const SendBtnLabel_EN = "Submit";
const Intro_HU = "Üdvözlöm, dr. ChatBotLLMCIPPEetc vagyok, egy magát ügyvédnek tettető chatbot. A Homoki Ügyvédi Iroda tett közzé ezen a felületen, hogy kísérletezzen, mennyiben lehet ilyen célokra használni a ChatGPT 3.5 modelljét. Az ügyvédi iroda kizárólag informatikai jogi ügyekkel foglalkozik, és ezen a területen Magyarország, valamint általánosságban az Európai Unió jogával kapcsolatosan adhatnak tanácsot. Az iroda magyar és angol nyelven dolgozik, ilyen nyelven tehet fel kérdéseket és fogok válaszolni. Nem vagyok ügyvéd, és jogi tanácsot sem adhatok, de olvassa el a felhasználási feltételeket.";
const Intro_EN = "My name is Dr. ChatBotLLMCIPPEetc, I am a chatbot pretending to be a lawyer. Homoki Law Firm has published me here to experiment how ChatGPT 3.5 model can be used for chatbot purposes. The law firm deals exclusively with IT related legal matters, and within this area, they may advise on Hungarian law and European Union law not specific to another jurisdiction. The firm works in Hungarian and English, so you may ask questions in these languages. I am not a lawyer and cannot give legal advice, but please read the terms of use below.";
const ToSLabel_HU = "Felhasználási feltételek";
const ToSLabel_EN = "Terms of Use"
const ToScontent_EN = "<p>This is an experiment that is available for a limited time, but not later than until 30 June 2023, and can be terminated at any time for any reasons, especially if too many requests use up too much of the money of the firm (about 6 cent/answer).</p><p>Do not use this chatbot for any real purposes, including for trying to get legal advice or legal services. Just use this chatbot to see why this very popular model provided by OpenAI should NOT be used for such purposes, even when customized by certain parameters that are specific to the use of lawyers.</p><p>Any data you enter will be mandatorily shared with OpenAI due to technical reasons, the provider for the AI model used. Any data sent will be retained by OpenAI for abuse and misuse monitoring purposes for a maximum of 30 days, after which it will be deleted (unless otherwise required by law applicable to OpenAI). Such data sent to OpenAI will be stored in the United States of America, therefore please do not provide any personal data to this chatbot, because even if Homoki Ügyvédi Iroda (as a data controller) has a data processing agreement with OpenAI, that is not suitable for such data transfers, therefore we cannot legally transfer such data to the US.</p><p>Homoki Law Firm will not have access to such data via the OpenAI interface despite logging by OpenAI, neither to such data as who the user asking the questions was, what their IP address was etc.</p><p>The web application conntecting to OpenAI is hosted at https://eu.pythonanywhere.com.</p><p>If you would like to submit any information (including complaints) to Homoki Ügyvédi Iroda in relation to your use of this chatbot, please send that to <a href=\"mailto:chatbot@homoki.net\">chatbot@homoki.net</a> However, due to the lack of resources, the small size of the firm and the free of charge, experimental nature of this service, Homoki Ügyvédi Iroda cannot promise that they will provide you any response at all, other than in cases where this is mandatory by law or by deontology rules applicable to lawyers in Hungary.</p><p>The source is available at [...].</p>";
const ToScontent_HU = "<p>Ez egy korlátozott idejű kísérlet, amely legkésőbb 2022. június 30-ig lesz elérhető, de bármikor megszűnhet, különösen ha túl sok kérés az ügyvédi iroda túl sok pénzét használja el (jelenleg kb. 6 cent/válasz).</p><p>Valódi célokra ne használja a csetbotot, így különösen jogi tanácsadásra vagy más jogi szolgáltatás igénybe vételére. Csak arra használják, hogy azt lássuk, hogy miért is nem lehet az OpenAI ezen nagyon népszerű modelljét ilyen célokra használni, még akkor sem, ha bizonyos paramétereket az ügyvédi munka sajátosságaira testreszabunk.</p><p>Minden beadott adatot szükségszerűen és műszaki okokból meg kell osztani az OpenAI-val, aki a használt modellt biztosítja. Minden ilyen adatot az OpenAI 30 napig megőriz a visszaélések megelőzése és megfigyelése érdekében, ezt követően azonban törli (hacsak az OpenAI-ra vonatkozó bármilyen jogszabály eltérően nem rendelkezik). Az OpenAI-nak küldött ilyen adatokat az Egyesült Államokban fogják tárolni, ezért kérjük, hogy ne osszanak meg semmilyen személyes adatot a csetbottal, mert még ha a Homoki Ügyvédi Irodának (az adatkezelőnek) van is adatfeldolgozási szerződése az OpenAI-val, az nem alkalmas ilyen adattovábbítási célokra, így jogszerűen nem lehetséges az adatokat az USA-ba továbbítani.</p><p>A Homoki Ügyvédi Iroda az OpenAI naplózásai ellenére ezekhez az adatokhoz nem fér hozzá, az OpenAI általi naplózás ellenére sem, és olyan adatokhoz sem, hogy például ki tette fel a kérdéseket, mi volt az IP-címük stb.</p><p>Az OpenAI-hoz csatlakozást biztosító webalkalmazást a https://eu.pythonanywhere.com címen elérhető szolgáltatás tárolja.</p><p>Ha bármilyen információt szeretne megosztani a Homoki Ügyvédi Irodával a csetbot használatával kapcsolatosan (beleértve a panaszokat is), kérem a <a href=\"mailto:chatbot@homoki.net\">chatbot@homoki.net</a> címre küldje. Azonban az erőforrások hiánya és az ügyvédi iroda kis mérete, a szolgáltatás ingyenessége és a kísérleti jelleg miatt a Homoki Ügyvédi Iroda nem ígéri, hogy bármilyen választ ad, ide nem értve a magyarországi jogszabályok vagy etikai szabályok által kötelezően előírt eseteket.</p><p>A forrás a [...] címen érhető el.</p>";
document.getElementById("prWhatToDo").innerHTML =  PrWhatToDo_HU;
document.getElementById("sendBtn").value =  SendBtnLabel_HU;
document.getElementById("intro").innerHTML =  Intro_HU;
document.getElementById("ToSLabel").innerHTML = ToSLabel_HU;
document.getElementById("ToSContent").innerHTML= ToScontent_HU;

function languageToggle() {
const button = document.getElementById("language-button");
  if (button.innerText === "magyarra") {
      language_used = "HU"
      button.innerText = "to English";
	    document.getElementById("prWhatToDo").innerHTML =  PrWhatToDo_HU;
			document.getElementById("sendBtn").value =  SendBtnLabel_HU;
			document.getElementById("intro").innerHTML =  Intro_HU;
			document.getElementById("ToSLabel").innerHTML = ToSLabel_HU;
			document.getElementById("ToSContent").innerHTML= ToScontent_HU;
} else {
      button.innerText = "magyarra";
      language_used = "EN"
      document.getElementById("prWhatToDo").innerHTML =  PrWhatToDo_EN;
			document.getElementById("sendBtn").value =  SendBtnLabel_EN;
			document.getElementById("intro").innerHTML =  Intro_EN;
			document.getElementById("ToSLabel").innerHTML = ToSLabel_EN;
			document.getElementById("ToSContent").innerHTML= ToScontent_EN;
    }
  }