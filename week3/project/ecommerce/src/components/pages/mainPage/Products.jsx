import React from "react";
import Product from "./Product";

export default function Products({ products, setSelectedProduct }) {
  return (
    <div className="products">
      {products.length === 0 ? (
        <h4>Loading products.....</h4>
      ) : (
        products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              product={product}
              setSelectedProduct={setSelectedProduct}
            />
          );
        })
      )}
    </div>
  );
}
