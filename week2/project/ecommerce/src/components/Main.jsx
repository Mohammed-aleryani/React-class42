import React from "react";
import Categories from "./Categories-list";
import Products from "./Products";
import Alert from "./Alert";

const Main = ({
  categories,
  currentCategory,
  setCategory,
  products,
  alert,
  setSelectedProduct
}) => {
  return (
    <div className="container">
      {alert.show && <Alert text={alert.text} />}
      <h1>Products</h1>
      <Categories
        currentCategory={currentCategory}
        setCategory={setCategory}
        categories={categories}
      />
      <Products currentCategory={currentCategory} products={products} setSelectedProduct={setSelectedProduct} />
    </div>
  );
};

export default Main;
