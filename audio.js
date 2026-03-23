// ------------------------------
// Const Sound
// ------------------------------

const theme1 = new Audio(
  "Sounds/themeSound/theme-1_pixabay(freesound-community).mp3",
);
const theme2 = new Audio("Sounds/themeSound/theme-2_pixabay(f2-fans).mp3");
const theme3 = new Audio("Sounds/themeSound/theme-3_pixabay(bodleasons).mp3");
const logoAboutMe = new Audio(
  "Sounds/mini-logo-aboutme_pixabay(freesound-community).mp3",
);
const logoSkills = new Audio(
  "Sounds/mini-logo-skills_pixabay(freesound-community).mp3",
);
const link = new Audio("Sounds/link_pixabay(lordsonny).mp3");
const glühen = new Audio("Sounds/glühen_pixabay(u-2t6urhkvx7).mp3");
const exit = new Audio("Sounds/link-hover_pixabay(49053354).mp3");
const shine = new Audio("Sounds/skills-shine_pixabay(alexis-gaming-cam).mp3");

// Const MessageBox / Let

const messageBox = document.getElementById("msg-box");
let warnungAktiv = false;
let aktuellerSong = 2;
let song;

// ------------------------------
// Function ErrorMessage
// ------------------------------

function showError(e) {
  if (warnungAktiv === false && song.paused) {
    warnungAktiv = true;

    messageBox.innerHTML = `<span id="msg-box-txt"><b>Kleiner Fehler:</b> Bitte klicke zuerst auf die Seite<b> ⤦</b><br><small>${e.message}</small></span>`;
    messageBox.classList.add("show");
    console.warn(
      `<span id="msg-box-txt">KLeiner Fehler: Bitte klicke zuerst auf die Seite   ⋙   ${e.message}</span>`,
    );

    glühen.volume = 0.5;

    setTimeout(() => {
      messageBox.classList.remove("show");
      warnungAktiv = false;
    }, 5000);
  }
}

// ------------------------------
// Function Theme (Playlist)
// ------------------------------

function themePlay() {
  if (aktuellerSong === 1) {
    song = theme1;
  } else if (aktuellerSong === 2) {
    song = theme2;
  } else {
    song = theme3;
  }

  theme1.volume = 1;
  theme2.volume = 1;
  theme3.volume = 0.5;

  song.play().catch(showError);

  song.onended = function () {
    if (aktuellerSong === 1) {
      aktuellerSong = 2;
    } else if (aktuellerSong === 2) {
      aktuellerSong = 3;
    } else {
      aktuellerSong = 1;
    }

    setTimeout(() => {
      themePlay();
    }, 1000);
  };
}

function themeFinish() {
  theme1.volume = 0;
  theme2.volume = 0;
}

// ------------------------------
// Function LogoAboutMe
// ------------------------------

function logoAboutMePlay() {
  logoAboutMe.volume = 1;
  logoAboutMe.loop = true;
  logoAboutMe.play().catch(showError);
}

function logoAboutMeFinish() {
  logoAboutMe.volume = 0;
  logoAboutMe.loop = false;
}

// ------------------------------
// Function LogoSkills
// ------------------------------

function logoSkillsPlay() {
  logoSkills.volume = 1;
  logoSkills.play().catch(showError);
}

// ------------------------------
// Function Link(Index)
// ------------------------------

function linkPlayIndex() {
  themeFinish();
  link.volume = 0.5;

  setTimeout(() => {
    link.pause();
    link.currentTime = 0;
    window.location.href = "index.html";
  }, 2500);

  link.play().catch(showError);
}

// ------------------------------
// Function Link(About Me)
// ------------------------------

function linkPlayAboutMe() {
  themeFinish();
  link.volume = 0.5;

  setTimeout(() => {
    link.pause();
    link.currentTime = 0;
    window.location.href = "about_me.html";
  }, 2500);

  link.play().catch(showError);
}

// ------------------------------
// Function Link(Projects)
// ------------------------------

function linkPlayProjects() {
  themeFinish();
  link.volume = 0.5;

  setTimeout(() => {
    link.pause();
    link.currentTime = 0;
    window.location.href = "projects.html";
  }, 2500);

  link.play().catch(showError);
}

// ------------------------------
// Function Link(Skills)
// ------------------------------

function linkPlaySkills() {
  themeFinish();
  link.volume = 0.5;

  setTimeout(() => {
    link.pause();
    link.currentTime = 0;
    window.location.href = "skills.html";
  }, 2500);

  link.play().catch(showError);
}

// ------------------------------
// Function Glühen
// ------------------------------

function glühenPlay() {
  glühen.volume = 1;
  glühen.play().catch(showError);
}

function glühenFinish() {
  if (glühen.volume > 0.05) {
    glühen.volume -= 0.05;
    setTimeout(glühenFinish, 50);
  } else {
    glühen.volume = 0;
    glühen.pause();
  }
}

// ------------------------------
// Function Exit
// ------------------------------

function exitPlay() {
  exit.volume = 1;
  exit.play().catch(showError);
}

// ------------------------------
// Function Skills
// ------------------------------

function skillsPlay() {
  shine.volume = 1;
  shine.play().catch(showError);
}
