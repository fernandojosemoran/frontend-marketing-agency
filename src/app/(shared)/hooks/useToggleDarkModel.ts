import { useEffect, useState } from "react";

type ToggleDarkModeTypes = { 
    isDarkTheme: boolean, 
    handlerTheme: () => void 
}

function handlerTheme(isDarkTheme: boolean): void {
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

export default function useToggleDarkMode(): ToggleDarkModeTypes {
    const [ isDarkTheme, setIsDarkTheme ] = useState<boolean>(true);
  
    useEffect(() => {
      const theme = global.matchMedia('(prefers-color-scheme: dark)').matches;

      setIsDarkTheme(theme);
    }, []);

    return {
        isDarkTheme,
        handlerTheme: () => handlerTheme(isDarkTheme)
    };
}