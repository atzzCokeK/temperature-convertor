import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "./useLocalStorage";

const IS_DARK_MODE = "isDarkMode";

export const useIsDarkMode = (): [
  isDarkMode: boolean,
  setDark: (isDarkMode: boolean) => void
] => {
  const [isDarkMode, setIsDarkModeInternal] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const value: string | null = localStorage.getItem(IS_DARK_MODE);
      if (value !== null) {
        setIsDarkModeInternal(JSON.parse(value));
        console.log(isDarkMode);
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
