import React, { useCallback, useMemo, useState, ReactNode } from "react";
import { useTelegram } from "../../hooks/useTelegram";

// Типизация контекста для языка
interface LangContextType {
  lang: string;
}

// Типизация контекста для действий
interface LangContextActionType {
  toggleLang: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Типизация свойств провайдера
interface LangProviderProps {
  children: ReactNode;
}

// Инициализация контекста с типами
export const LangContext = React.createContext<LangContextType>({
  lang: "ru",
});

export const LangContextAction = React.createContext<LangContextActionType>({
  toggleLang: () => {},
});

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const { lang } = useTelegram();

  const storedLang = localStorage.getItem("lang");
  const currentLang = storedLang ? storedLang : lang;

  const [language, setLanguage] = useState<string>(currentLang);

  const toggleLang = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    localStorage.setItem("lang", newLang);
    setLanguage(() => newLang);
  }, []);

  const value = useMemo(() => ({ lang: language }), [language]);
  const actions = useMemo(() => ({ toggleLang }), [toggleLang]);

  return (
      <LangContext.Provider value={value}>
        <LangContextAction.Provider value={actions}>
          {children}
        </LangContextAction.Provider>
      </LangContext.Provider>
  );
};
