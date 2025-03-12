import React, { useState } from "react";
import NctProductList from "./components/NctProductList";
import NctProductAdd from "./components/NctProductAdd";

const NctApp = () => {
  const [nctProduct, nctSetProduct] = useState([
    {
      nctpID: "2310900051",
      nctpName: "Nguyễn Công Tùng",
      nctpQuantity: 1,
      nctpPrice: 100,
    },
    {
      nctpID: "P01",
      nctpName: "Nồi Cơm Điện",
      nctpQuantity: 11,
      nctpPrice: 250000,
    },
    {
      nctpID: "P02",
      nctpName: "Xìa Đánh Cơm",
      nctpQuantity: 10,
      nctpPrice: 44000,
    },
  ]);

  const nctHandleAddProduct = (newProduct) => {
    nctSetProduct((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h1>Nguyễn Công Tùng-K23CNT3</h1>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-lg-6 grid-margin stretch-card">
            <NctProductAdd onAddProduct={nctHandleAddProduct} />
          </div>
          <div className="col-5 grid-margin">
            <NctProductList products={nctProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NctApp;
