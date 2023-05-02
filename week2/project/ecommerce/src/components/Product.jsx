import React from "react";
import{Link} from "react-router-dom"


export default function Product({product,setSelectedProduct}){
    return(
       <div className="product" onClick={()=>setSelectedProduct(product)}>
         <Link className="link"  to={`/product/${product.id}`}>           
            <div className="image-holder"> <img src={product.image} alt={product.description} /></div>
            <div>{product.title}</div>
        </Link>
       </div>
    )
}