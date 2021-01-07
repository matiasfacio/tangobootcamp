import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./css/main.css";
import RouterMenu from "./components/RouterMenu";

function App() {
  return (
    <BrowserRouter>
      <RouterMenu/>
    </BrowserRouter>
  );
}

export default App;
