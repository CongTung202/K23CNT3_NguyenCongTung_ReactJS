import React, { Component } from "react";

export default class NctCompo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Boka Chan",
    };
  }

  render() {
    return (
      <div>
        <h2>NctCompo</h2>
        <p> Dữ liệu trong state: {this.state.name}</p>
        <h3> Hiển thị dữ liệu từ props</h3>
        <p>Name: {this.props.nctName}</p>
        <p>Address: {this.props.nctAddress}</p>
      </div>
    );
  }
}
