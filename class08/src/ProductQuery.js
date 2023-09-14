import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function ProductList({ data }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("name");

  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter((product) =>
        product.name.includes(searchQuery)
      );
      setSearchList(filtered);
    } else {
      setSearchList(data);
    }
  }, [data, searchQuery]);

  return (
    <>
      <h2>상품 목록</h2>
      <ul>
        {searchList.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>상품명: {product.name}</Link>{" "}
            <p>가격: {product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
