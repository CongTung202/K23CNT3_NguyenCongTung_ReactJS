import React, { Component } from "react";

export default class NctClasEvent1 extends Component {
  //ham xl
  nctEventButtonClick1 = () => {
    alert("Het Cuu 1 Clicked");
  };

  nctEventButtonClick2 = () => {
    alert("Het Cuu 2222 Clicked");
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.nctEventButtonClick1}>
          Boka 1
        </button>
        <button className="btn btn-warning" onClick={this.nctEventButtonClick2}>
          Boka 2
        </button>
      </div>
    );
  }
}
