export const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


export function toggleDarkMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && isDarkTheme)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light';

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark';

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme');
}