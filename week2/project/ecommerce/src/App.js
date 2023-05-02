import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import { Routes,Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
  const [currentCategory, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState({ show: false });
  const [SelectedProduct,setSelectedProduct]=useState()

  const handleAlert = ({ text }) => {
    setAlert({ show: true, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const grabCategories = async () => {
    try {
      return await fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((categories) => setCategories(categories));
    } catch (error) {
      handleAlert({ text: "failed to grab categories" });
    }
  };

  const grabProducts = async () => {
    if (currentCategory.length === 0) {
      try {
        return await fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((products) => setProducts(products));
      } catch (error) {
        alert({ text: "failed to grab products" });
      }
    } else {
      setProducts([])
      try {
        return await fetch(
          `https://fakestoreapi.com/products/category/${encodeURI(
            currentCategory
          )}`
        )
          .then((res) => res.json())
          .then((products) => setProducts(products));
      } catch (error) {
        alert({ text: "failed to grab this category products" });
      }
    }
  };

  useEffect(() => {
    grabCategories();
  }, []);

  useEffect(() => {
    grabProducts();
  }, [currentCategory]);

  return (
    <>
     <Routes>
      <Route path="/" element={ <Main
        categories={categories}
        currentCategory={currentCategory}
        setCategory={setCategory}
        products={products}
        alert={alert}
        setSelectedProduct={setSelectedProduct}
      />}/>
      <Route path="/Product/:id" element={<Details SelectedProduct={SelectedProduct}/>}/>
     </Routes>
    </>
  );
}

export default App;
