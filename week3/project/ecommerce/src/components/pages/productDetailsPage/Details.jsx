import React, { useContext } from "react";
import { ReactComponent as Heart } from "../../../assets/heart-regular.svg";
import { ReactComponent as HeartSolid } from "../../../assets/heart-solid.svg";
import { FavoritesContext } from "../../../FavoriteContext";
const Details = ({ SelectedProduct }) => {
  const [favorites, handleFavorites] = useContext(FavoritesContext);
  return (
    <div className="details-container">
      <h1>{SelectedProduct.title}</h1>
      <div className=" details ">
        <div>
          <p> {SelectedProduct.description}</p>
        </div>
        <div>
          <img
            src={SelectedProduct.image}
            alt={`${SelectedProduct.description}`}
          />
        </div>
      </div>
      <div
        className="favorite"
        onClick={() => {
          handleFavorites(SelectedProduct.id);
        }}
      >
        {favorites.includes(SelectedProduct.id) ? <HeartSolid /> : <Heart />}
      </div>
    </div>
  );
};

export default Details;
