import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import "./Product.css";
import { useLocation } from "react-router-dom";
import { usePostRequest } from "../../hooks/useRequest.js";
import { LangContext } from "../LangProvider/LangProvider.js";
import dataJSON from "../../data.json";
export const Product = () => {
    const { state } = useLocation();
    const { lang } = useContext(LangContext);
    const dataFetch = {
        sign: state.product.id,
        language: lang === "ru" ? "original" : "translated",
        period: "today",
    };
    const { data, error } = usePostRequest(JSON.stringify(dataFetch));
    if (!data)
        return _jsx("h1", { children: "Loading..." });
    const item = dataJSON.horoscopes[lang !== "ru" ? "en" : lang][data.sign];
    const horoscope = {
        title: item.title,
        date: item.date,
        horoscope: data.horoscope,
        src: `/${data.sign}.png`,
    };
    return (_jsxs("div", { className: "product", children: [_jsx("h1", { className: "product__title", children: horoscope.title }), _jsx("p", { className: "product__date", children: horoscope.date }), _jsx("figure", { className: "product__img", children: _jsx("img", { src: horoscope.src, alt: "" }) }), _jsx("p", { className: "product__text", children: horoscope.horoscope })] }));
};
