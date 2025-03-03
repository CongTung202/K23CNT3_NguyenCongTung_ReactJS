import React, { Component } from "react";

export default class NctRenderListObjectIphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctSmartPhone: [
        {
          nctID: 1,
          nctName: "Iphone 16 ProMax",
          nctQuanlity: 22,
          nctprice: 28000000,
        },
        {
          nctID: 2,
          nctName: "SamSung S24 Ultra",
          nctQuanlity: 24,
          nctprice: 31033000,
        },
        { nctID: 3, nctName: "ViVo S20", nctQuanlity: 12, nctprice: 5320000 },
        {
          nctID: 4,
          nctName: "Boka M6 Helio",
          nctQuanlity: 8,
          nctprice: 7800000,
        },
        {
          nctID: 5,
          nctName: "RedMagic 8s Phus",
          nctQuanlity: 17,
          nctprice: 1200000,
        },
      ],
    };
  }
  render() {
    let nctSmartPhone = this.state;
    let nctPhone = nctSmartPhone.map((nctItem, index) => {
      return (
        <tr>
          <td>{nctItem.nctID}</td>
          <td>{nctItem.nctName}</td>
          <td>{nctItem.nctQuanlity}</td>
          <td>{nctItem.nctprice}</td>
          <td>
            <button className="btn btn-primary">Sua</button>
            <button className="btn btn-danger">Xoa</button>
          </td>
        </tr>
      );
    });
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quanlity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{nctPhone}</tbody>
        </table>
      </div>
    );
  }
}
