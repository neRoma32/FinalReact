export const themeService = {
  getInitialMode() {
    return localStorage.getItem("theme") || "light";
  },

  toggleMode(currentMode) {
    const nextMode = currentMode === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextMode);
    return nextMode;
  }
};
