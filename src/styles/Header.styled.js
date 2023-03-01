import styled from "styled-components";
import { Theme } from "../constants/colors";

export const HeaderContainer = styled.div`
  dispay: flex;
  width: auto;
  margin-top: 0;
  padding-top: 0;
  margin-left: 100px;
  margin-right: 100px;
  height: 75px;
  background-color: ${Theme.colors.white};
`;

export const LogoContainer = styled.div`
  img {
    position: relative;
    top: 0px;
    left: 30px;
    width: 150px;
    height: 70px;
  }
`;

export const ShoppingCartContainer = styled.div`
  p {
    display: inline-block;
    text-align: center;
    top: 25px;
    right: 200px;
    color: ${Theme.colors.secondary};
    position: absolute;
  }

  img {
    position: absolute;
    top: 20px;
    right: 150px;
    width: 30px;
    color: ${Theme.colors.secondary};
  }
`;

export const SearchfieldContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 350px;
  width: 300px;
  height: 75px;
  color: ${Theme.colors.secondary};

  // Style the underline
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #333;
    opacity: 0.6;
    margin-top: 10px;
  }
`;
