import logo from "./crossover.jpg";
import "./App.css";
import NctCompo from "./components/nctCompo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>NguyenCongTung-K23CNT3-React</h1>
      <NctCompo nctName="Tung 123" nctAddress="Het Cuu" />
    </div>
  );
}

export default App;
