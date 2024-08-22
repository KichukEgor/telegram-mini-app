import { useEffect, useContext } from "react";
import { LangContext, LangContextAction } from "../LangProvider/LangProvider";
import "./Header.css";

const langs = [
  { code: "ru", name: "Ru" },
  { code: "cs", name: "En" },
];

export const Header = () => {
  const { lang } = useContext(LangContext);
  const { toggleLang } = useContext(LangContextAction);

  useEffect(() => {}, [lang]);

  return (
    <header className={"header"}>
      <select className={"username"} value={lang} onChange={toggleLang}>
        {langs.map((lng, index) => (
          <option key={index} value={lng.code}>
            {lng.name}
          </option>
        ))}
      </select>
    </header>
  );
};
