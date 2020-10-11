import React from "react";

export default function Product({ product }) {
  //<img src="jeans3.jpg" alt="Denim Jeans" style="width:100%">
  const { name, price, category, brand } = product;
  console.log("product render");
  return (
    <div className="column">
      <div className="card">
        <h1>{name}</h1>
        <h2>Category: {category}</h2>
        <h3>Brand: {brand}</h3>
        <p className="price">Price: {price}</p>
      </div>
    </div>
  );
}
