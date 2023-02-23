import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { HeaderContainer } from "./styles/Header.styled";
import GlobalStyle from "./styles/App.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <Header />
      </HeaderContainer>
    </>
  );
}

export default App;
