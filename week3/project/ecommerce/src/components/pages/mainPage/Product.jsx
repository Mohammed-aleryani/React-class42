import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../../../assets/heart-solid.svg";
import { FavoritesContext } from "../../FavoriteContext/FavoriteContext";

export default function Product({ product, setSelectedProduct }) {
  const [favorites, handleFavorites] = useContext(FavoritesContext);
  return (
    <div className="product" onClick={() => setSelectedProduct(product)}>
      <Link className="link" to={`/product/${product.id}`}>
        <div className="image-holder">
          <img src={product.image} alt={product.description} />
        </div>
        <div>{product.title}</div>
      </Link>
      <div
        className="favorite"
        onClick={() => {
          handleFavorites(product.id);
        }}
      >
        {favorites.includes(product.id) ? <HeartSolid /> : <Heart />}
      </div>
    </div>
  );
}
