import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NctNavBar() {
  return (
    <div className="nav">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/about">About Us</Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/contact">Contact</Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/user-list">List</Link>
        </li>
        <li style={{ display: "inline", marginRight: "10px" }}>
          <Link to="/user-add">Add</Link>
        </li>
      </ul>
    </div>
  );
}
