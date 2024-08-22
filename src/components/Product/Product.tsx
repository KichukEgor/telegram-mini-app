import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { usePostRequest } from "../../hooks/useRequest.js";
import { LangContext } from "../LangProvider/LangProvider.js";
import dataJSON from "../../data.json";
import "./Product.css";

export const Product = () => {
  const { state } = useLocation();

  const { lang } = useContext(LangContext);

  const dataFetch = {
    sign: state.product.id,
    language: lang === "ru" ? "original" : "translated",
    period: "today",
  };

  const { data, isLoading, error } = usePostRequest(JSON.stringify(dataFetch));

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Ooops, error happened</h1>;

  // @ts-ignore
  const item = dataJSON.horoscopes[lang !== "ru" ? "en" : lang][data.sign];
  // @ts-ignore
  const horoscope = {
    title: item.title,
    date: item.date,
    horoscope: data.horoscope,
    src: `./assets/images/${data.sign}.png`,
  };

  return (
    <div className="product">
      <h1 className="product__title">{horoscope.title}</h1>
      <p className="product__date">{horoscope.date}</p>
      <figure className="product__img">
        <img src={horoscope.src} alt="" />
      </figure>
      <p className="product__text">{horoscope.horoscope}</p>
    </div>
  );
};
