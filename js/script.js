"use strict";

const script = document.currentScript;

const themes = ["light", "dark"];

window.loadTheme = (i) => {
  const html = document.documentElement;
  const name = themes[i];
  html.setAttribute("data-theme", name);
  localStorage.setItem("theme", i);
};

window.cycleTheme = () => {
  const name = document.documentElement.getAttribute("data-theme");
  const index = (1 + themes.indexOf(name)) % themes.length;
  loadTheme(index);
};

window.openMenu = () => {
  document.getElementById("menu").style.display = "initial";
};

window.closeMenu = () => {
  document.getElementById("menu").style.display = "none";
};

addEventListener("load", () => {
  let theme = parseInt(localStorage.getItem("theme"));
  if (!theme) {
    theme = 0;
  }
  loadTheme(theme);
});
