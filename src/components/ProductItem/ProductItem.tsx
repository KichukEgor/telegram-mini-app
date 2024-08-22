import React from "react";
import "./ProductItem.css";

type ProductItemProps = {
    title: string;
    date: string;
    src?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ title, date, src }) => {
  return (
    <div className="product-item">
      <div className="product-item__title">{title}</div>
      <div className="product-item__image">
        <img src={src || ""} alt={title} />
      </div>
      <div className="product-item__subtitle">{date}</div>
    </div>
  );
};
