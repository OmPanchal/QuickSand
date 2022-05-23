const setTheme = (theme) => {
  document.documentElement.style.setProperty("--primary", theme.primary);
  document.documentElement.style.setProperty("--secondary", theme.secondary);
  document.documentElement.style.setProperty("--red", theme.red);
};

export default setTheme;
