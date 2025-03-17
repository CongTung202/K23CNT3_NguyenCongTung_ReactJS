import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NctNavBar from "./components/NctNavBar";
import NctHome from "./components/NctHome";
import NctAbout from "./components/NctAbout";
import NctContact from "./components/NctContact";
import NctListUsers from "./components/NctListUsers";
import React, { useState } from "react";
import NctForm from "./components/NctForm";
const ListUsers = [
  {
    id: "SV01",
    NctName: "Nguyen COng Tung",
    NctUserName: "BokaChan",
    NctPass: "Boka1234",
  },
  {
    id: "SV02",
    NctName: "Le Thi Arya",
    NctUserName: "RussianGirl",
    NctPass: "Arya123",
  },
  {
    id: "SV03",
    NctName: "Nguyen Van Saber",
    NctUserName: "Avocado Athur",
    NctPass: "AthurFullPhep",
  },
];

function App() {
  const [NctUsers, setNctUser] = useState(ListUsers);
  const nctHandleAdd = (nctparam) => {
    setNctUser((prev) => {
      return [...prev, nctparam];
    });
  };
  return (
    <div className="container border mt-3">
      <h2>React Route DomDomYesYes-Nguyen Cong Tung-K23CNT3</h2>
      <Router>
        <NctNavBar />
        <Routes>
          <Route path="/" element={<NctHome />} />
          <Route path="/about" element={<NctAbout />} />
          <Route path="/contact" element={<NctContact />} />
          <Route
            path="/user-list"
            element={<NctListUsers renderNctUsers={NctUsers} />}
          />
          <Route
            path="/user-add"
            element={<NctForm onNctAddNew={nctHandleAdd} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
