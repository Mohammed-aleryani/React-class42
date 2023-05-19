import React from "react";
import Categories from "./Categories";
import Products from "./Products";
import Alert from "./Alert";
import { Link } from "react-router-dom";

const Main = ({
  categories,
  currentCategory,
  setCategory,
  products,
  alert,
  setSelectedProduct,
}) => {
  return (
    <div className="container">
      {alert.show && <Alert text={alert.text} />}
      <Link className="link" to="/">
        Products
      </Link>
      <Link className="link" to="/favorites">
        Favorites
      </Link>
      <h1>Products</h1>

      <Categories
        currentCategory={currentCategory}
        setCategory={setCategory}
        categories={categories}
      />
      <Products
        currentCategory={currentCategory}
        products={products}
        setSelectedProduct={setSelectedProduct}
      />
    </div>
  );
};

export default Main;
