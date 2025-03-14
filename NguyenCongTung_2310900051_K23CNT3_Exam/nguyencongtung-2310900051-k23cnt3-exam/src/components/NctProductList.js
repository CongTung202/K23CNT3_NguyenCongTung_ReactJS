import React, { Component } from "react";

class NctProductList extends Component {
  render() {
    const { products } = this.props;
    const nctProductElement = products.map((product) => (
      <tr key={product.nctpID}>
        <td>{product.nctpID}</td>
        <td>{product.nctpName}</td>
        <td>{product.nctpQuantity}</td>
        <td>{product.nctpPrice}</td>
      </tr>
    ));

    return (
      <div>
        <h2 className="card-title">Danh sách sản phẩm</h2>
        <div className="table-responsive mx-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>{nctProductElement}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NctProductList;
