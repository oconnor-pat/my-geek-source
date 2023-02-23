import React from "react";
import logo from "../../assets/logo.png";
import shoppingcartoutline from "../../assets/svg/shoppingcartoutline.svg";
import { HeaderContainer, ShoppingCartIcon } from "../../styles/Header.styled";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <ShoppingCartIcon>
        <img src={shoppingcartoutline} alt="shoppingcartoutline" />
      </ShoppingCartIcon>
    </HeaderContainer>
  );
}

export default Header;
