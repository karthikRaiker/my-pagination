import React from "react";

function Pagination({ handlePrevNext, handlePage, products, page, totalPage }) {
  return (
    <div>
      {products.length > 0 && (
        <div className="Pagination">
          <span
            onClick={() => handlePrevNext("prev")}
            className="page--btns"
            style={{ display: page === 1 ? "none" : "" }}
          >
            {"<<"}
          </span>
          {[...Array(totalPage)].map((_, i) => {
            return (
              <span
                onClick={() => {
                  handlePage(i + 1);
                }}
                className="page--btns"
                style={{ backgroundColor: page === i + 1 ? "#123456" : "" }}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => handlePrevNext("next")}
            className="page--btns"
            style={{ display: page === totalPage ? "none" : "" }}
          >
            {">>"}
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;
