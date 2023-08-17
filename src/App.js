import React, { useState, useEffect } from "react";
import ProductItem from "./components/ProductItem";
import "../index.css";
import Pagination from "./components/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    fetchApi();
  }, [page]);

  const fetchApi = async () => {
    let res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
    );
    let products = await res.json();
    if (products?.products) {
      setProducts(products.products);
      setTotalPage(Math.floor(products.total / 10));
    }
  };

  const handlePage = (selectedPage) => {
    if (page >= 1 && page <= totalPage && selectedPage !== page)
      setPage(selectedPage);
  };

  const handlePrevNext = (control) => {
    control === "prev"
      ? setPage((prevState) => prevState - 1)
      : setPage((prevState) => prevState + 1);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="ProductItem--list">
          {products.map((productItem) => {
            return <ProductItem {...productItem} key={productItem.id} />;
          })}
        </div>
      )}
      <Pagination
        handlePrevNext={handlePrevNext}
        handlePage={handlePage}
        products={products}
        page={page}
        totalPage={totalPage}
      />
    </div>
  );
}

export default App;
