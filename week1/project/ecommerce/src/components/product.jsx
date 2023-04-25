import React from "react";


export default function Product({product}){
    return(
        <div className="product">
            <div className="image-holder"> <img src={product.image} alt={product.description} /></div>
            <div>{product.title}</div>
        </div>
    )
}