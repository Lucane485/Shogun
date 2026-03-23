// ------------------------------
// localStorage Projects
// ------------------------------

localStorage.setItem("lastSite", "projects");
localStorage.setItem("backSite", "projects");

// ------------------------------
// Function STL
// ------------------------------

function downloadKaktusSTL() {
  const link = document.createElement("a");
  link.href = "Projekte/Blender/Der-Absolut-Echte-Und-Wahre-Kaktus.stl";
  link.download = "Der-Absolut-Echte-Und-Wahre-Kaktus.stl";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadOrbitalSTL() {
  const link = document.createElement("a");
  link.href = "Projekte/Blender/Der-Absolut -Echte-Und-Wahre-Orbital.stl";
  link.download = "Der-Absolut -Echte-Und-Wahre-Orbital.stl";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadVerarscheSTL() {
  const link = document.createElement("a");
  link.href = "Projekte/Blender/Verarsche.stl";
  link.download = "Verarsche.stl";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ------------------------------
// Go Crazy
// ------------------------------

const verarsche = document.getElementById("verarsche");

verarsche.classList.add("ok");

// ------------------------------
// Dialog Logo
// ------------------------------

const logo = document.getElementById("pjtLogo");
let sprüche = 0;
let msgTimer;

logo.addEventListener("click", () => {
  sprüche++;

  logo.classList.add("ok");
  if (localStorage.getItem("crazy-pjt") !== "true") {
    localStorage.setItem("crazy-pjt", "true");
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
