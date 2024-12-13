export function themeToggle(theme) {
  let html = document.getElementsByTagName('html')[0];
  html.className = theme;
}
