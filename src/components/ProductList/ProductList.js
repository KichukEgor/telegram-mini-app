import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { ProductItem } from "../ProductItem/ProductItem.js";
import { Link } from "react-router-dom";
import { LangContext } from "../LangProvider/LangProvider.js";
import { usePostRequest } from "../../hooks/useRequest.js";
import { normalizedData } from "../../utils";
import dataJSON from "../../data.json";
import "./ProductList.css";
export const ProductList = () => {
    const { lang } = useContext(LangContext);
    const dataFetch = {
        language: lang === "ru" ? "original" : "translated",
        period: "today",
    };
    const { data, isLoading, error } = usePostRequest(JSON.stringify(dataFetch));
    if (isLoading)
        return _jsx("h1", { children: "Loading..." });
    if (error)
        return _jsx("h1", { children: "Ooops, error happened..." });
    const { horoscope } = data;
    const horoscopes = normalizedData(horoscope, dataJSON, lang);
    return (_jsx("div", { className: "product-list", children: horoscopes.map((product, index) => (_jsx(Link, { to: `/product/${product.id}`, state: { product: product }, children: _jsx(ProductItem, { title: product.title, description: product.description, date: product.date, src: product.src }, index) }, index))) }));
};
