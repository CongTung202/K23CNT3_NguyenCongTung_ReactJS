import React, { Component } from "react";

export default class NctClasscompo extends Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      name: "Boka Beef State",
      address: "Kyoto-Japan",
      noitice: "Put Your Phone Down",
    };
  }
  changeInfo = (ev) => {
    this.setState({
      // capnhat
      name: "Boka Beef Steak Yahoooooooo",
    });
  };
  render() {
    let users = this.props.renderUsers;
    return (
      <div className="alert alert-success">
        <h1>Success State</h1>
        <p>Name:{this.state.name}</p>
        <p>Address:{this.state.address}</p>
        <p>Noitice:{this.state.noitice}</p>
        <br />
        <button className="btn btn-primary" onClick={this.changeInfo}>
          Change Value
        </button>
        <hr />
        <h3>Get From App</h3>
        <p>Name:{this.props.rendername}</p>
        <p>Address:{users ? users.address : ""}</p>
        <p>Noitice:{this.props.rendernoitice}</p>
      </div>
    );
  }
}
