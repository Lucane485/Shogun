// ------------------------------
// Function dataBackLink
// ------------------------------

function backLink() {
  const dataSite = localStorage.getItem("backSite");

  if (dataSite === "about_me") {
    linkPlayAboutMe();
  } else if (dataSite === "projects") {
    linkPlayProjects();
  } else if (dataSite === "skills") {
    linkPlaySkills();
  } else {
    showNavError();
  }
}

// ------------------------------
// Function LastSite
// ------------------------------

function lastSite() {
  const lastSite = localStorage.getItem("lastSite");

  if (lastSite === "about_me") {
    window.location.href = "about_me.html";
  } else if (lastSite === "data") {
    window.location.href = "data.html";
  } else if (lastSite === "projects") {
    window.location.href = "projects.html";
  } else if (lastSite === "skills") {
    window.location.href = "skills.html";
  } else if (lastSite === "settings") {
    window.location.href = "settings.html";
  } else {
    window.location.href = "index.html";
    showNavError();
  }
}

// ------------------------------
// Function ShowNavError
// ------------------------------

function showNavError() {
  if (warnungAktiv === false) {
    warnungAktiv = true;

    messageBox.innerHTML = `<b>Kleiner Fehler:</b> Uns ist leider ein Fehler unterlaufen, weswegen wir Sie bitten die
      <b>Seite Neu zu Laden</b> oder den vom <b>Browser</b> verfügbaren <b>Zurück Pfeil</b>
      oben Links zu drücken um dann gegebenfalls wieder auf die Seite davor zu kommen. Vielen Dank`;
    messageBox.classList.add("show");
    console.warn(
      `KLeiner Fehler: Bitte mache einer der / beide Optionen   ⋙   Option 1: Seite Neuladen. Option 2: Browser Zurück Pfeil benutzen`,
    );

    glühen.volume = 0.5;

    setTimeout(() => {
      messageBox.classList.remove("show");
      warnungAktiv = false;
    }, 10000);
  }
}

// ------------------------------
// About Me (CheckSpeed)
// ------------------------------

function checkSpeed() {
  let currentSpeed = localStorage.getItem("me-Logo");

  const logo = document.getElementById("meLogo");

  if (logo) {
    if (currentSpeed === "fast") {
      logo.style.animationDuration = "0.05s";
    } else {
      logo.style.animationDuration = "1.4s";
    }
  }
}

checkSpeed();

// ------------------------------
// Go Crazy
// ------------------------------

function goHell() {
  console.clear();
  let hellOk = 0;
  let crazySite = 0;

  if (localStorage.getItem("crazy-1") === "true") {
    hellOk++;
    console.log(
      `%cCheckpoint 1 Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (localStorage.getItem("crazy-2") === "true") {
    hellOk++;
    console.log(
      `%cCheckpoint 2 Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (localStorage.getItem("crazy-3") === "true") {
    hellOk++;
    console.log(
      `%cCheckpoint 3 Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (localStorage.getItem("crazy-4") === "true") {
    hellOk++;
    console.log(
      `%cCheckpoint 4 Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (localStorage.getItem("crazy-5") === "true") {
    hellOk++;
    console.log(
      `%cCheckpoint 5 Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (localStorage.getItem("crazy-6") === "true") {
    hellOk++;
    console.log(
      `%cCheckpoint 6 Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (hellOk === 6) {
    console.log(
      `%cSettings: ✓`,
      `background: rgb(82, 32, 129); font-weight: bold`,
    );
  }

  if (localStorage.getItem("crazy-me") === "true") {
    hellOk++;
    crazySite++;
    console.log(
      `%cCheckpoint About Me (Logo) Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (localStorage.getItem("crazy-pjt") === "true") {
    hellOk++;
    crazySite++;
    console.log(
      `%cCheckpoint Projects (Logo) Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (localStorage.getItem("crazy-skills") === "true") {
    hellOk++;
    crazySite++;
    console.log(
      `%cCheckpoint Skills (Logo) Activated`,
      `background: rgb(0, 255, 0); color: rgb(0, 0, 0); font-weight: bold`,
    );
  }
  if (crazySite === 3) {
    console.log(
      `%cSites: ✓`,
      `background: rgb(82, 32, 129); font-weight: bold`,
    );
  }

  if (hellOk === 9) {
    console.log(
      `%cNow It's Time To BURN!`,
      `background: rgb(255, 0, 0); font-weight: bold`,
    );
  }
}

goHell();

// ------------------------------
// Lava Logik
// ------------------------------

const lavaPaths = document.querySelectorAll(".lava-path");
let lastScrollY = window.scrollY;
let glowIntensity = 0;
let hoverPower = 0;

function animateGlobalLava() {
  const t = Date.now() * 0.0015;

  const currentScrollY = window.scrollY;
  const scrollDelta = Math.abs(currentScrollY - lastScrollY);
  lastScrollY = currentScrollY;

  glowIntensity = glowIntensity * 0.92 + scrollDelta * 0.2;
  const dynamicGlow = Math.min(Math.max(glowIntensity, 5), 40);

  let currentActive = 0;

  if (typeof active !== "undefined") {
    currentActive = active;
  } else {
    currentActive = 0;
  }

  hoverPower = hoverPower * 1;
  let combinedPower = currentActive * 2 + hoverPower;
  const power = Math.min(combinedPower, 50);

  let dHor = `M 0 120 L 0 60`;
  for (let i = 0; i <= 6; i++) {
    const x = i * (1600 / 6);
    const y = 50 + Math.sin(t + i) * (15 + power);
    dHor += ` Q ${x - 133} ${y}, ${x} ${y}`;
  }
  dHor += ` L 1600 120 L 0 120 Z`;

  let dVert = `M 120 0 L 60 0`;
  for (let i = 0; i <= 6; i++) {
    const y = i * (1600 / 6);
    const x = 50 + Math.sin(t + i) * (5 + power * 2);
    dVert += ` Q ${x} ${y - 133}, ${x} ${y}`;
  }
  dVert += ` L 120 1600 L 120 0 Z`;

  lavaPaths.forEach((path) => {
    if (path.id === "lava-path-scroll") {
      path.setAttribute("d", dVert);
      path.style.filter = `drop-shadow(-2px 0 ${dynamicGlow}px rgb(var(--clr-glow)))`;
    } else {
      path.setAttribute("d", dHor);
    }
  });

  requestAnimationFrame(animateGlobalLava);
}

animateGlobalLava();
