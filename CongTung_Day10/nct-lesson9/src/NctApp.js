import React from "react";
import NctButton from "./NctButton";
import { NctThemeProvider } from "./context/NctThemeConText";
import NctThemeToggle from "./components/NctThemeToggle";
import NctToDoList from "./components/NctToDoList"; // Import the ToDo List component
import "./App.css";

export default function NctApp() {
  return (
    <NctThemeProvider>
      {" "}
      {/* Wrap the application in the Theme Provider */}
      <div className="alert alert-success mx-3">
        <h1>Nguyen Cong Tung-K23CNT3</h1>
        <NctButton />
        <NctThemeToggle />
        <NctToDoList /> {/* Add the ToDo List component */}
      </div>
    </NctThemeProvider>
  );
}
