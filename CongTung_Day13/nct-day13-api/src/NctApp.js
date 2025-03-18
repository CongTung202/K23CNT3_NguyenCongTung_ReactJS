import "./App.css";
import NctCreateMockAPI from "./components/NctCreateMockAPI";
import NctReactApiLocal from "./components/NctReactApiLocal";
import NctReadMockAPI from "./components/NctReadMockAPI";

function App() {
  return (
    <div className="App">
      <h2>K23CNT3-Boka Chan</h2>
      <NctReactApiLocal />
      <h2>Read Mock Api</h2>
      <NctReadMockAPI />
      <h3>Create Mock API</h3>
      <NctCreateMockAPI />
    </div>
  );
}

export default App;
