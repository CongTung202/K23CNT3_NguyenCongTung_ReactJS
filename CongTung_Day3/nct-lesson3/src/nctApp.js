import logo from "./logo.svg";
import "./App.css";
import NctJSX from "./components/NctJSX";
import NctFuncCompo from "./components/NctFuncCompo";
import NctClassCompo from "./components/NctClassCompo";

function NctApp() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/image.png"})`,
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="header">
        <h1>K23CNT3-Nguyen Cong Tung</h1>
      </div>
      <h2 className="Title">Boka Chan</h2>
      <div className="container border mt-1">
        <div className="wrap-1">
          <NctJSX className="JSX" />
        </div>
        <div className="wrap-2">
          <NctFuncCompo className="Func" />
          <NctClassCompo className="Class" />
        </div>
      </div>
    </div>
  );
}

export default NctApp;
