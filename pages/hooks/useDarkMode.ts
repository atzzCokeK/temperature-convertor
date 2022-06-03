import { useCallback, useEffect, useState } from "react";

const IS_DARK_MODE = "isDarkMode";

export const useDarkMode = (): [
  isDarkMode: boolean,
  setDark: (isDarkMode: boolean) => void
] => {
  const [isDarkMode, setIsDarkModeInternal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const value: string | null = localStorage.getItem(IS_DARK_MODE);
      if (value !== null) {
        const isDark = JSON.parse(value);
        setIsDarkModeInternal(isDark);

        isDark && document.documentElement.classList.add("dark");
        !isDark && document.documentElement.classList.remove("dark");
      }
    }
  }, [isDarkMode, setIsDarkModeInternal]);

  const setDark = useCallback(
    (isDarkMode: boolean) => {
      localStorage.setItem(IS_DARK_MODE, isDarkMode ? "true" : "false");
      setIsDarkModeInternal(isDarkMode);
    },
    [setIsDarkModeInternal]
  );

  return [isDarkMode, setDark];
};
