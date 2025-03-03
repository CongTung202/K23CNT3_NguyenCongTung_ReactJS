import React, { Component } from "react";
import NctClassLoginComp from "./NctClassLoginComp";
import NctClassLogoutComp from "./NctClassLogoutComp";

export default class NctClassLoginControl extends Component {
  loginControl = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <NctClassLoginComp />;
    }
    return <NctClassLogoutComp />;
  };

  render() {
    return <div>NctClassLoginControl</div>;
  }
}
