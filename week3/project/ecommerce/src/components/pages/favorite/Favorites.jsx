import React, { useContext } from "react";
import Product from "../mainPage/Product";
import { FavoritesContext } from "../../FavoriteContext/FavoriteContext";

const Favorites = ({ products }) => {
  const [favorites, handleFavorites] = useContext(FavoritesContext);
  const favoritesList = products.filter((product) => favorites.includes(product.id));

  return (
    <>
      <h1>Favorites</h1>
      <div className="products">
        {favoritesList.length === 0 ? (
          <h4>There are no favorites .....</h4>
        ) : (
          favoritesList.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleFavorites={handleFavorites}
              isFavorite={favorites.includes(product.id)}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Favorites;
