import React, { Component } from "react";

class NctProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        nctpID: "",
        nctpName: "",
        nctpQuantity: "",
        nctpPrice: "",
      },
    };
  }

  nctHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: value,
      },
    }));
  };

  nctHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddProduct(this.state.product);
    this.setState({
      product: {
        nctpID: "",
        nctpName: "",
        nctpQuantity: "",
        nctpPrice: "",
      },
    });
  };

  render() {
    const { nctpID, nctpName, nctpQuantity, nctpPrice } = this.state.product;

    return (
      <div className="container mt-4">
        <h2>Thêm sản phẩm mới</h2>
        <form onSubmit={this.nctHandleSubmit}>
          <div className="mb-3">
            <label htmlFor="nctpID" className="form-label">
              ID sản phẩm:
            </label>
            <input
              type="text"
              className="form-control"
              id="nctpID"
              name="nctpID"
              value={nctpID}
              onChange={this.nctHandleChange}
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
              value={nctpName}
              onChange={this.nctHandleChange}
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
              value={nctpQuantity}
              onChange={this.nctHandleChange}
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
              value={nctpPrice}
              onChange={this.nctHandleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm sản phẩm
          </button>
        </form>
      </div>
    );
  }
}

export default NctProductAdd;
