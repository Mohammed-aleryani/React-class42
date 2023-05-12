import React, { useEffect } from "react";
import Category from "./Category";
import { v4 as uuidv4 } from "uuid";

export default function Categories({
  currentCategory,
  setCategory,
  categories,
}) {
  useEffect(() => {}, []);

  return (
    <div className="categories">
      {categories.length === 0 ? (
        <h4>loading categories....</h4>
      ) : (
        categories.map((category) => {
          return (
            <Category
              key={uuidv4()}
              category={category}
              currentCategory={currentCategory}
              setCategory={setCategory}
            />
          );
        })
      )}
    </div>
  );
}
