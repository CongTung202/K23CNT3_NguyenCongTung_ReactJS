import React, { Component } from "react";

export default class NctClassEventSate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctName: "Boka Chan HEhe",
      nctAge: 20,
    };
  }
  NctClassEventSate = () => {
    alert("FullName " + this.state.nctName + "\n Age: " + this.state.nctAge);
  };
  render() {
    return (
      <div>
        <button onClick={this.NctClassEventSate}>Click me</button>
      </div>
    );
  }
}
