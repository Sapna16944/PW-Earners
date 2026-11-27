import React from "react";
import { useState } from "react";

function Product({ name }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <h3>{name}</h3>
      <button onClick={() => setQuantity((prev) => prev + 1)}>
        Quantity : {quantity}
      </button>
    </div>
  );
}

function Key() {
  const [products, setProducts] = useState([
    { id: 1, name: "mouse" },
    { id: 2, name: "keyboard" },
    { id: 3, name: "monitor" },
    { id: 4, name: "headphones" },
  ]);

  function removeFirstProduct() {
    setProducts((prev) => prev.slice(1));
  }
  return (
    <>
      <ul>
        {products.map(({id, name}) => (
          <Product key={id} name={name} />
        ))}
      </ul>
      <button onClick={removeFirstProduct}>Remove first product</button>
    </>
  );
}

export default Key;
