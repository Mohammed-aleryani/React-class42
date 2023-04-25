import React from "react";
import Category from "./category";
import allCategories from "../fake-data/all-categories";


export default function Categories({currentCategory , categoryHandler} ){
  return(
    <div className="categories">
      {allCategories.map((category)=>{
        return(
          <Category category={category} currentCategory={currentCategory} categoryHandler={categoryHandler} />
        )
      })}
    </div>
  )  
}