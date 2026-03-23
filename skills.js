// ------------------------------
// localStorage Skills
// ------------------------------

localStorage.setItem("lastSite", "skills");
localStorage.setItem("backSite", "skills");

// ------------------------------
// Const Text
// ------------------------------

const text0 = document.getElementById("text0");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const text5 = document.getElementById("text5");
const text6 = document.getElementById("text6");
const text7 = document.getElementById("text7");
const text8 = document.getElementById("text8");

// Const Slot

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const slot4 = document.getElementById("slot4");
const slot5 = document.getElementById("slot5");
const slot6 = document.getElementById("slot6");
const slot7 = document.getElementById("slot7");
const slot8 = document.getElementById("slot8");

// Let Active

let active = 0;

// ------------------------------
// Slot.EventListener
// ------------------------------

slot1.addEventListener("click", function () {
  if (active === 1) {
    active = 0;
    console.log(`HTML Closed`, `font-weight: bold`);
  } else {
    active = 1;
    console.log(`HTML Opened`, `font-weight: bold`);
  }
  Update();
});

slot2.addEventListener("click", function () {
  if (active === 2) {
    active = 0;
    console.log(`WORD Closed`, `font-weight: bold`);
  } else {
    active = 2;
    console.log(`WORD Opened`, `font-weight: bold`);
  }
  Update();
});

slot3.addEventListener("click", function () {
  if (active === 3) {
    active = 0;
    console.log(`CSS Closed`, `font-weight: bold`);
  } else {
    active = 3;
    console.log(`CSS Opened`, `font-weight: bold`);
  }
  Update();
});

slot4.addEventListener("click", function () {
  if (active === 4) {
    active = 0;
    console.log(`PPT Closed`, `font-weight: bold`);
  } else {
    active = 4;
    console.log(`PPT Opened`, `font-weight: bold`);
  }
  Update();
});

slot5.addEventListener("click", function () {
  if (active === 5) {
    active = 0;
    console.log(`JS Closed`, `font-weight: bold`);
  } else {
    active = 5;
    console.log(`JS Opened`, `font-weight: bold`);
  }
  Update();
});

slot6.addEventListener("click", function () {
  if (active === 6) {
    active = 0;
    console.log(`EXCLE Closed`, `font-weight: bold`);
  } else {
    active = 6;
    console.log(`EXCLE Opened`, `font-weight: bold`);
  }
  Update();
});

slot7.addEventListener("click", function () {
  if (active === 7) {
    active = 0;
    console.log(`Material Design Lite Closed`, `font-weight: bold`);
  } else {
    active = 7;
    console.log(`Material Design Lite Opened`, `font-weight: bold`);
  }
  Update();
});

slot8.addEventListener("click", function () {
  if (active === 8) {
    active = 0;
    console.log(`BLENDER Closed`, `font-weight: bold`);
  } else {
    active = 8;
    console.log(`BLENDER Opened`, `font-weight: bold`);
  }
  Update();
});

// ------------------------------
// Funktion Update
// ------------------------------

function Update() {
  if (active === 0) {
    text0.style.opacity = 1;
  } else {
    text0.style.opacity = 0;
  }

  if (active === 1) {
    text1.style.opacity = 1;
  } else {
    text1.style.opacity = 0;
  }

  if (active === 2) {
    text2.style.opacity = 1;
  } else {
    text2.style.opacity = 0;
  }

  if (active === 3) {
    text3.style.opacity = 1;
  } else {
    text3.style.opacity = 0;
  }

  if (active === 4) {
    text4.style.opacity = 1;
  } else {
    text4.style.opacity = 0;
  }

  if (active === 5) {
    text5.style.opacity = 1;
  } else {
    text5.style.opacity = 0;
  }

  if (active === 6) {
    text6.style.opacity = 1;
  } else {
    text6.style.opacity = 0;
  }

  if (active === 7) {
    text7.style.opacity = 1;
  } else {
    text7.style.opacity = 0;
  }

  if (active === 8) {
    text8.style.opacity = 1;
  } else {
    text8.style.opacity = 0;
  }
}

// ------------------------------
// Varablen
// ------------------------------

let info = 0;
const p = document.getElementById("text_open");
const arrowInfo = document.getElementById("arrow_down");
const arrowRight = document.getElementById("arrow_right");

// ------------------------------
// Arrow.EventListener
// ------------------------------

arrowInfo.addEventListener("click", function () {
  Info();
});

// ------------------------------
// Funktion Info
// ------------------------------

function Info() {
  if (info === 0) {
    p.innerHTML = `Ich bin <b>Dennis Staral¹</b> und habe diese Internetseite geschaffen. 
                  Auf dieser Seite können Sie die 8 verschiedenen <b>Icons</b> anklicken, um kleine Infotexte zu erhalten. 
                  Alle Texte sind unterschiedlich, da sie von Programmen handeln, die <b>ich</b> beherrsche. 
                    <br><br><br>
                  <small>
                    <span style="color:#be0000">¹</span>Wenn du nicht weißt, wer ich bin 
                      <span class="arrow_right"
                      id="rrow_right"
                      style="margin-right: 10px;"
                    >⤦</span>
                      <br>
                    <span class="item"
                      style="color:#b30000;
                      cursor:pointer;
                      margin-left: 5px;"
                      onclick="window.location.href='about_me.html#main'"
                      onmouseenter="(exitPlay(), (hoverPower = 9))"
                      onmouseleave="hoverPower = 0"
                    >ABOUT ME</span>
                  </small>`;
    arrowInfo.innerHTML = "🢁";
    info = 1;
    console.log("Info Text Opened");
  } else {
    p.innerHTML =
      "Wähle eines der <b>Icons</b> und clicke auf ihn, um einen kurzen Text darüber zu sehen.";
    arrowInfo.innerHTML = "🢃";
    info = 0;
    console.log("Info Text Closed");
  }
}

// ------------------------------
// Dialog Logo
// ------------------------------

const logo = document.getElementById("skillsLogo");
let sprüche = 0;
let msgTimer;

logo.addEventListener("click", () => {
  sprüche++;

  logo.classList.add("ok");
  if (localStorage.getItem("crazy-skills") !== "true") {
    localStorage.setItem("crazy-skills", "true");
    if (typeof goHell === "function") {
      goHell();
    }
  }

  let aktuellerText = "";

  if (sprüche === 4) {
    aktuellerText = `<span id="msg-box-txt">Servus, joa also es ist schon aktiviert, du brauchst net mehr Clicken aber, Du bist ein Freier Geist, ne</span>`;
  } else if (sprüche === 12) {
    aktuellerText = `<span id="msg-box-txt">Ok, jz übertreibst du es aber langsam, es passt schon, es wird sich nichts Magisch ändern</span>`;
  } else if (sprüche === 13) {
    aktuellerText = `<span id="msg-box-txt">Ok, Ich gib auf. Mach was du willst</span>`;
  } else if (sprüche === 18) {
    aktuellerText = `<span id="msg-box-txt">Geduld ist eine Tugend... die du nicht hast</span>`;
  } else if (sprüche === 19) {
    aktuellerText = `<span id="msg-box-txt">Klick.</span>`;
  } else if (sprüche === 20) {
    aktuellerText = `<span id="msg-box-txt">Noch ein Klick.</span>`;
  } else if (sprüche === 21) {
    aktuellerText = `<span id="msg-box-txt">Und noch einer...</span>`;
  } else if (sprüche === 26) {
    aktuellerText = `<span id="msg-box-txt">26</span>`;
  } else if (sprüche === 27) {
    aktuellerText = `<span id="msg-box-txt">27</span>`;
  } else if (sprüche === 28) {
    aktuellerText = `<span id="msg-box-txt">28</span>`;
  } else if (sprüche === 29) {
    aktuellerText = `<span id="msg-box-txt">29</span>`;
  } else if (sprüche === 30) {
    aktuellerText = `<span id="msg-box-txt">Digga Lak was haste den für Probleme, ja. Kann netmal in ruhe Schlafen du *Zensiert*.Du hast schon 30 Clicks gemacht wovon 29 Nutzlos waren, ja. Man was soll das Ey</span>`;
  } else if (sprüche === 31) {
    aktuellerText = `<span id="msg-box-txt">Digga kann nicht sein, ja. Musst hier die ganze Zeit rum Stressen. Du hast schon 31 Clicks gemacht und Nix erreicht, ja. Such mal Hobbys</span>`;
  } else if (sprüche === 32) {
    aktuellerText = `<span id="msg-box-txt">Ich kann nicht mehr, Ich KANN Net Mehr </span> 😮😮‍💨 😮😮‍💨 😮😮‍💨 😤😤😤 <span id="msg-box-txt"> 31 Nutzlose CLicks ... Merkste selbst, ne</span>`;
  } else if (sprüche === 35) {
    aktuellerText = `<span id="msg-box-txt">Ich KANN nicht mehr </span> 🚽🚽🏳️💩`;
  } else if (sprüche === 36) {
    aktuellerText = `<span id="msg-box-txt">Ich mach nicht mehr mit</span>`;
  } else if (sprüche === 48) {
    aktuellerText = `<span id="msg-box-txt">Achtung jz kommts</span>`;
  } else if (sprüche === 50) {
    aktuellerText = `<span id="msg-box-txt">Anschnallen Bitte</span>`;
  } else if (sprüche === 64) {
    aktuellerText = `😤😤😤`;
  } else if (sprüche === 65) {
    aktuellerText = `<span id="msg-box-txt">JUNGE DU KLEINER VERDAMMTER </span> 🤬🤬🤬🤬🤬🤬🤬🤬🤬`;
  } else if (sprüche === 66) {
    aktuellerText = `<span id="msg-box-txt">ICH </span> 🤬🤬🤬🤬 <span id="msg-box-txt"> DEINE </span> 🤬🤬🤬🤬🤬🤬 <span id="msg-box-txt"> JA</span>`;
  } else if (sprüche === 67) {
    aktuellerText = `<span id="msg-box-txt">67 67 67 67 67 67 67</span>`;
  } else if (sprüche === 70) {
    aktuellerText = `<span id="msg-box-txt">Du kannst es net lassen, ne</span>`;
  } else if (sprüche === 100) {
    aktuellerText = `💩💩💩`;
  } else if (sprüche === 150) {
    aktuellerText = `<span id="msg-box-txt">du h...</span>`;
  } else if (sprüche === 153) {
    aktuellerText = `<span id="msg-box-txt">...</span>`;
  } else if (sprüche === 154) {
    aktuellerText = `<span id="msg-box-txt">OKAY</span>`;
  } else if (sprüche === 155) {
    aktuellerText = `<span id="msg-box-txt">Okay Okay</span>`;
  } else if (sprüche === 157) {
    aktuellerText = `<span id="msg-box-txt">Ich habe villeicht Etwas übertrieben ABER DU AUCH</span>`;
  } else if (sprüche === 160) {
    aktuellerText = `<span id="msg-box-txt">Entschuldigung 🙄🙄🙄</span>`;
  } else if (sprüche === 164) {
    aktuellerText = `<span id="msg-box-txt">Fertig mit Heulen</span>`;
  } else if (sprüche === 165) {
    aktuellerText = `<span id="msg-box-txt">Alles wieder Fein?</span>`;
  } else if (sprüche === 170) {
    aktuellerText = `<span id="msg-box-txt">Erkunde doch mal den rest der Internetseite</span>`;
  } else if (sprüche === 290) {
    aktuellerText = `<span id="msg-box-txt">Ja Hallo, ich bin's wieder, alles gut?</span>`;
  } else if (sprüche === 292) {
    aktuellerText = `<span id="msg-box-txt">Du kommst langsam in die Gefahrenzone</span>`;
  } else if (sprüche === 294) {
    aktuellerText = `<span id="msg-box-txt">Hallo</span>`;
  } else if (sprüche === 295) {
    aktuellerText = `<span id="msg-box-txt">HALLO!</span>`;
  } else if (sprüche === 298) {
    aktuellerText = `<span id="msg-box-txt">Es ist net gut, dass du ...</span>`;
  } else if (sprüche === 299) {
    aktuellerText = `<span id="msg-box-txt">Oh Damn</span>`;
  } else if (sprüche === 300) {
    logo.classList.add("crashout");
    document.body.style.overflow = "hidden";
    aktuellerText = `<span id="msg-box-txt">Sorry, aber ich hab's dir ja gesagt </span> 😝😝😝 <span id="msg-box-txt"> Wolltest ja net hören, ne. Keine Sorge, wird nur 10 Sek anhalten. BYE BYE</span> 👋👋👋`;

    setTimeout(() => {
      logo.classList.remove("crashout");
      document.body.style.overflow = "auto";
    }, 10000);
  } else if (sprüche === 500) {
    logo.classList.add("crashout");
    document.body.style.overflow = "hidden";
    aktuellerText = `<span id="msg-box-txt">Hey Du, bevor du dich bis ins Unendliche clickst solltest du mal das Gerät ausmachen, an die Frische Luft gehen, etwas Sonne Tanken UND Gras Berühren Gehen</span> 😁😁😁`;

    setTimeout(() => {
      logo.classList.remove("crashout");
      document.body.style.overflow = "auto";
    }, 10000);
  }

  if (sprüche >= 500) {
    sprüche = 499;
  }

  if (aktuellerText !== "") {
    clearTimeout(msgTimer);
    messageBox.innerHTML = aktuellerText;
    messageBox.classList.add("show");

    msgTimer = setTimeout(() => {
      messageBox.classList.remove("show");
    }, 10000);
  }

  setTimeout(() => {
    logo.classList.remove("ok");
  }, 575);
});
