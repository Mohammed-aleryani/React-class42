import React, { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {
  const [currentCategory, setCategory] = useState("");
  const categoryHandler = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <div className="container">
      <h1>Products</h1>
      <Categories
        currentCategory={currentCategory}
        categoryHandler={categoryHandler}
      />
      <Products currentCategory={currentCategory.slice(6)} />
    </div>
  );
}

export default App;
