import React from "react";

export default function Category({ category, currentCategory, setCategory }) {
  return (
    <div
      className={
        currentCategory === category
          ? "category category-activated"
          : "category"
      }
      onClick={() => {
        setCategory(category);
      }}
    >
      <p>{category}</p>
    </div>
  );
}
