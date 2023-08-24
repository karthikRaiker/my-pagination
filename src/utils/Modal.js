import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../../index.css";

function Modal({
  thumbnail = `https://i.dummyjson.com/data/products/1/thumbnail.jpg`,
  title = `Title`,
  handleCloseModal,
}) {
  return (
    <div className="Modal-container">
      <div className="Modal-content">
        <div className="Modal-header">
          <div className="Modal-title">Item Details</div>
          <span onClick={handleCloseModal}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="Modal-body">
          <img
            src={
              thumbnail
                ? thumbnail
                : `https://i.dummyjson.com/data/products/1/thumbnail.jpg`
            }
            alt={title ? title : `Title`}
          />
          <label>{title ? title : `Title`}</label>
          <div className="Modal-description">loremmm</div>
        </div>
        <div className="Modal-footer">
          <button onClick={handleCloseModal}>Ok</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
