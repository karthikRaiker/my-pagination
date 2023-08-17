import React from "react";
import "../../index.css";

function ProductItem({ thumbnail, title }) {
  return (
    <div className="ProductItem--single">
      <img src={thumbnail} alt={title} />
      <label>{title}</label>
    </div>
  );
}

export default ProductItem;
