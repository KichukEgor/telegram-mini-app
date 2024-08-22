import React, { useContext } from "react";
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

  const { data, isLoading ,error } = usePostRequest(JSON.stringify(dataFetch));

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Ooops, error happened...</h1>;

  const { horoscope } = data;

  const horoscopes = normalizedData(horoscope, dataJSON, lang);

  return (
      <div className="product-list">
        {horoscopes.map((product, index) => (
            <Link key={index} to={`./product/${product.id}`} state={{ product: product }}>
              <ProductItem
                  key={index}
                  title={product.title}
                  description={product.description}
                  date={product.date}
                  src={product.src}
              />
            </Link>
        ))}
      </div>
  );
};
