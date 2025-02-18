import React from "react";

export default function NctJSX() {
  // khoi tao bien
  const name = "Boka Chan 1";
  // khoi tao bien le
  const user = {
    firstname: "Tung",
    surname: "Love",
    lastname: "Bocchi",
  };
  //titan Ham
  const fullName = (user) => {
    return user.firstname + " " + user.surname + " " + user.lastname;
  };
  //element /doi tuong
  const element = (
    <div>
      {/*bieu thuc jsx giong ben duoi*/}
      <h3 style={{ color: "white" }}>{fullName(user)}</h3>
      <h3 style={{ color: "white" }}>
        Chào Mừng {name} đến với Bình Dương vô vọng
      </h3>
    </div>
  );
  //ham chao
  const sayHello = (name) => {
    const titleStyle = { color: "white" };
    if (name) {
      return (
        <h3 style={titleStyle}>Chào Mừng {name} đến với Bình Dương vô vọng</h3>
      );
    } else {
      return (
        <h3 style={titleStyle}>
          Chào Mừng <i>--Guest</i> đến với Bình Dương vô vọng
        </h3>
      );
    }
  };
  return (
    <div>
      <h1>
        <center style={{ color: "white" }}>NctJSX-Expression</center>
      </h1>
      {/*Su Dung Bien Element */}
      {element}
      <hr />
      {sayHello()}
      <hr />
      {sayHello("Raiden Shogun")}
      <hr />
      {sayHello("Clorinde")}
      <hr />
      {sayHello("Chiori")}
    </div>
  );
}
