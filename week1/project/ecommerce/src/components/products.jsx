import React from "react";
import allProducts from "../fake-data/all-products";
import Product from "./Product";

export default function Products({ currentCategory }) {
  return (
    <div className="products">
      {currentCategory === ""
        ? allProducts.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        : allProducts
            .filter((product) => product.category === currentCategory)
            .map((product) => {
              return <Product key={product.id} product={product} />;
            })}
    </div>
  );
}
