import React from "react";

export default function Category({
  category,
  currentCategory,
  categoryHandler,
}) {
  return (
    <div
      className={
        currentCategory === category
          ? "category category-activated"
          : "category"
      }
      onClick={() => {
        categoryHandler(category);
      }}
    >
      <p>{category}</p>
    </div>
  );
}
