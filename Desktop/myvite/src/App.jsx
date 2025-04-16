import React from "react";
import { BrowserRouter } from "react-router";
import Router from "./router/Router";
import Navbar from "./taskr/navbar/Navbar"; 


const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <Navbar />

    </BrowserRouter>
  );
};

export default App;
