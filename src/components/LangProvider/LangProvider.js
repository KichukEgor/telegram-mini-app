import { jsx as _jsx } from "react/jsx-runtime";
import React, { useCallback, useMemo, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
// Инициализация контекста с типами
export const LangContext = React.createContext({
    lang: "ru",
});
export const LangContextAction = React.createContext({
    toggleLang: () => { },
});
export const LangProvider = ({ children }) => {
    const { lang } = useTelegram();
    const storedLang = localStorage.getItem("lang");
    const currentLang = storedLang ? storedLang : lang;
    const [language, setLanguage] = useState(currentLang);
    const toggleLang = useCallback((e) => {
        const newLang = e.target.value;
        localStorage.setItem("lang", newLang);
        setLanguage(() => newLang);
    }, []);
    const value = useMemo(() => ({ lang: language }), [language]);
    const actions = useMemo(() => ({ toggleLang }), [toggleLang]);
    return (_jsx(LangContext.Provider, { value: value, children: _jsx(LangContextAction.Provider, { value: actions, children: children }) }));
};
