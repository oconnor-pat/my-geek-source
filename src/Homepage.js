import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GlobalStyle from "./styles/App.styled";
import Navbar from "./components/Navbar/Navbar";
import Heroimage from "./components/Heroimage";
import FeaturedProducts from "./components/Featuredproducts";

function Homepage() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Heroimage />
      <FeaturedProducts />
    </>
  );
}

export default Homepage;
