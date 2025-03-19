import "./App.css";
import NctListUsers from "./components/NctListUsers";
import NctCreateUsers from "./components/NctCreateUsers";
import NctNavBar from "./components/NctNavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NctHome from "./components/NctHome";
import NctAbout from "./components/NctAbout";
import NctContact from "./components/NctContact";
function App() {
  return (
    <div className="App">
      <h1>Nguyen Cong Tung-K23CNT3-2310900051</h1>
      <Router>
        <NctNavBar />
        <Routes>
          <Route path="/" element={<NctHome />} />
          <Route path="/about" element={<NctAbout />} />
          <Route path="/contact" element={<NctContact />} />
          <Route path="/user-list" element={<NctListUsers />} />
          <Route path="/user-add" element={<NctCreateUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
