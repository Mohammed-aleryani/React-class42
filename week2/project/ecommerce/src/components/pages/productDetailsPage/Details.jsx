import React from "react";
const Details = ({ SelectedProduct }) => {

  return (
    <div className="details-container">
      <h1>{SelectedProduct.title}</h1>
      <div className=" details ">
        <div>
          <p> {SelectedProduct.description}</p>
        </div>
        <div>
          <img src={SelectedProduct.image} alt={`${SelectedProduct.description}`} />
        </div>
      </div>
    </div>
  );
};

export default Details;
