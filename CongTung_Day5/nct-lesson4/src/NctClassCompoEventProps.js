import React, { Component } from "react";

export default class NctClassCompoEventProps extends Component {
  nctEventButtonClick1 = () => {
    alert("Hello: " + this.props.nctRenderTitle);
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.nctEventButtonClick1}>
          hncn
        </button>
      </div>
    );
  }
}
