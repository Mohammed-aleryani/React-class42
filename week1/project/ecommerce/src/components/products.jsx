import React from "react";
import allProducts from "../fake-data/all-products";
import Product from "./product";

export default function Products({ currentCategory }) {
  return (
    <div className="products">
      {currentCategory == ""
        ? allProducts.map((product) => {
            return (
              <div>
                <Product product={product} />
              </div>
            );
          })
        : allProducts.filter(
            (product) =>
              product.category ==
              currentCategory).map((product) => {
                return (
                  <div>
                    <Product product={product} />
                  </div>
                );
              })
          }
    </div>
  );
}
