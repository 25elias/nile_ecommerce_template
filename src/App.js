import React from "react";
import db from "./lib/firebase.config"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";



function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
