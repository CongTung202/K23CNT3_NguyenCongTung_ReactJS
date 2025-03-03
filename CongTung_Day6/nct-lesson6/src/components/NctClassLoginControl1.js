import React, { Component } from "react";
import NctClassLoginControl from "./NctClassLoginControl";

export default class NctClassLoginControl1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }
  handleLogoutClick = () => {
    this.setState({
      isLoggedin: false,
    });
  };
  handleLoginClick = () => {
    this.setState({
      isLoggedin: true,
    });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        <NctClassLoginControl isLoggedIn={this.state.isLoggedIn} />
        {isLoggedIn ? (
          <input
            type="button"
            value={"logout"}
            onClick={this.handleLogoutClick}
          />
        ) : (
          <input
            type="button"
            value={"logout"}
            onClick={this.handleLoginClick}
          />
        )}
      </div>
    );
  }
}
