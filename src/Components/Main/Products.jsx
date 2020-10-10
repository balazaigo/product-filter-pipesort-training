import React from "react";

//Internal Component
import Product from "./Product";

export default function Products({ products }) {
  return products.map((product) => (
    <Product key={JSON.stringify(product)} product={product} />
  ));
}
