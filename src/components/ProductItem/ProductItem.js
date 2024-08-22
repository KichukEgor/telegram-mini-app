import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ProductItem.css";
export const ProductItem = ({ title, date, src }) => {
    return (_jsxs("div", { className: "product-item", children: [_jsx("div", { className: "product-item__image", children: _jsx("img", { src: src ?? "https://picsum.photos/200/300", alt: "product" }) }), _jsx("div", { className: "product-item__title", children: title }), _jsx("div", { className: "product-item__subtitle", children: date })] }));
};
