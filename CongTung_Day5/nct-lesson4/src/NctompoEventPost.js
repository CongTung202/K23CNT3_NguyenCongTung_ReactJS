import React, { Component } from "react";

export default class NctompoEventPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nctNoiDung: "What's Up",
    };
  }
  NctompoEventPostUp = () => {
    this.props.onNctDataToApp("Boka Chan-Kyoto");
  };
  render() {
    return (
      <div className="alert alert-success">
        <button className="btn btn-danger" onClick={this.NctompoEventPostUp}>
          Button 1-Chuyen Du Lieu To App
        </button>
      </div>
    );
  }
}
