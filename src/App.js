import React from "react";
import "./App.css";
import View from "./Components/View";
import NavBar from "./Components/NavBar";
import background from "./backGround.jpg";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: "100%",
        height: "auto",
        background: `url(${background}) no-repeat center center fixed`,
        backgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        OBackgroundSize: "cover",
        MozBackgroundSize: "cover"
      }}
    >
      <ToastContainer />
      <NavBar></NavBar>
      <View></View>
    </div>
  );
}

export default App;
