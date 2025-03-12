import React, { useState } from "react";

const NctProductAdd = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    nctpID: "",
    nctpName: "",
    nctpQuantity: "",
    nctpPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      nctpID: "",
      nctpName: "",
      nctpQuantity: "",
      nctpPrice: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2>Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nctpID" className="form-label">
            ID sản phẩm:
          </label>
          <input
            type="text"
            className="form-control"
            id="nctpID"
            name="nctpID"
            value={product.nctpID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nctpName" className="form-label">
            Tên sản phẩm:
          </label>
          <input
            type="text"
            className="form-control"
            id="nctpName"
            name="nctpName"
            value={product.nctpName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nctpQuantity" className="form-label">
            Số lượng:
          </label>
          <input
            type="number"
            className="form-control"
            id="nctpQuantity"
            name="nctpQuantity"
            value={product.nctpQuantity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nctpPrice" className="form-label">
            Giá:
          </label>
          <input
            type="number"
            className="form-control"
            id="nctpPrice"
            name="nctpPrice"
            value={product.nctpPrice}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </form>
    </div>
  );
};

export default NctProductAdd;
