const script = document.currentScript;

const themes = ["light", "dark"];

window.loadTheme = (name) => {
  const html = document.documentElement;
  html.setAttribute("data-theme", name);
};

window.cycleTheme = () => {
  const name = document.documentElement.getAttribute("data-theme");
  const index = (1 + themes.indexOf(name)) % themes.length;
  loadTheme(themes[index]);
};
