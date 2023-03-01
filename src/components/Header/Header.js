import React from "react";
import logo from "../../assets/logo.png";
import shoppingcartoutline from "../../assets/svg/shoppingcartoutline.svg";
import {
  HeaderContainer,
  LogoContainer,
  SearchfieldContainer,
  ShoppingCartContainer,
} from "../../styles/Header.styled";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>
        <SearchfieldContainer>
          <Searchbar />
        </SearchfieldContainer>
        <ShoppingCartContainer>
          <p>0 items in your cart</p>
          <img src={shoppingcartoutline} alt="shoppingcartoutline" />
        </ShoppingCartContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
