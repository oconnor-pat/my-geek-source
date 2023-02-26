import React from "react";
import logo from "../../assets/logo.png";
import shoppingcartoutline from "../../assets/svg/shoppingcartoutline.svg";
import {
  HeaderContainer,
  LogoContainer,
  SearchfieldContainer,
  ShoppingCartContainer,
} from "../../styles/Header.styled";
import { cartItems } from "../Shoppingcart/Cart";
import Searchbar from "./Searchbar";

function Header() {
  const cartValue = cartItems();

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
          <p>{cartValue}</p>
          <img src={shoppingcartoutline} alt="shoppingcartoutline" />
        </ShoppingCartContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
