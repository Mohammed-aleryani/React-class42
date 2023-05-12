import React from "react";
import Category from "./Category";
import allCategories from "../fake-data/all-categories";
import { v4 as uuidv4 } from "uuid";

export default function Categories({ currentCategory, categoryHandler }) {
  return (
    <div className="categories">
      {allCategories.map((category) => {
        return (
          <Category
            key={uuidv4()}
            category={category}
            currentCategory={currentCategory}
            categoryHandler={categoryHandler}
          />
        );
      })}
    </div>
  );
}
