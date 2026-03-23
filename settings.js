// ------------------------------
// localStorage About_Me
// ------------------------------

localStorage.setItem("lastSite", "settings");

// ------------------------------
// About Me (Settings)
// ------------------------------

const meLogo1 = document.getElementById("me-logo-1");
const meLogo2 = document.getElementById("me-logo-2");

meLogo1.addEventListener("click", () => {
  meLogo1.classList.add("show");
  meLogo2.classList.remove("show");
  localStorage.setItem("me-Logo", "slow");
  console.log(`Logo Rotation: Slow`, `font-weight: bold`);
  checkSpeed();
});

meLogo2.addEventListener("click", () => {
  meLogo1.classList.remove("show");
  meLogo2.classList.add("show");
  localStorage.setItem("me-Logo", "fast");
  console.log(`Logo Rotation: Fast`, `font-weight: bold`);
  checkSpeed();
});

if (localStorage.getItem("me-Logo") === "fast") {
  meLogo2.classList.add("show");
} else {
  meLogo1.classList.add("show");
}

// ------------------------------
// Go Crazy (Settings)
// ------------------------------

const stnOk1 = document.getElementById("settings-ok-1");
const stnOk2 = document.getElementById("settings-ok-2");
const stnOk3 = document.getElementById("settings-ok-3");
const stnOk4 = document.getElementById("settings-ok-4");
const stnOk5 = document.getElementById("settings-ok-5");
const stnOk6 = document.getElementById("settings-ok-6");

stnOk1.addEventListener("click", () => {
  stnOk1.classList.add("ok");
  localStorage.setItem("crazy-1", "true");
  goHell();
});

stnOk2.addEventListener("click", () => {
  stnOk2.classList.add("ok");
  localStorage.setItem("crazy-2", "true");
  goHell();
});

stnOk3.addEventListener("click", () => {
  stnOk3.classList.add("ok");
  localStorage.setItem("crazy-3", "true");
  goHell();
});

stnOk4.addEventListener("click", () => {
  stnOk4.classList.add("ok");
  localStorage.setItem("crazy-4", "true");
  goHell();
});

stnOk5.addEventListener("click", () => {
  stnOk5.classList.add("ok");
  localStorage.setItem("crazy-5", "true");
  goHell();
});

stnOk6.addEventListener("click", () => {
  stnOk6.classList.add("ok");
  localStorage.setItem("crazy-6", "true");
  goHell();
});

if (localStorage.getItem("crazy-1") === "true") stnOk1.classList.add("ok");
if (localStorage.getItem("crazy-2") === "true") stnOk2.classList.add("ok");
if (localStorage.getItem("crazy-3") === "true") stnOk3.classList.add("ok");
if (localStorage.getItem("crazy-4") === "true") stnOk4.classList.add("ok");
if (localStorage.getItem("crazy-5") === "true") stnOk5.classList.add("ok");
if (localStorage.getItem("crazy-6") === "true") stnOk6.classList.add("ok");
