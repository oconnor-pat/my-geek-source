import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/App.styled";
import Navbar from "./components/Navbar/Navbar";

function Homepage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
    </>
  );
}

export default Homepage;
