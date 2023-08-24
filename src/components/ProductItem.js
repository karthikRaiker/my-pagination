import React from "react";
import "../../index.css";

function ProductItem({ thumbnail, title, handleOpenModal, id }) {
  return (
    <div className="ProductItem--single" onClick={()=>handleOpenModal(id)}>
      <img src={thumbnail} alt={title} />
      <label>{title}</label>
    </div>
  );
}

export default ProductItem;
