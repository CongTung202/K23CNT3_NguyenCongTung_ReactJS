import React, { useMemo, useRef, useState } from "react";

function NctUseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([...products, { name, price: parseFloat(price) }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Calculating total...");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <input
        type="text"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên"
      />
      <br />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Nhập giá"
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.name} - {prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NctUseMemo;
