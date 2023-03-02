import styled from "styled-components";
import { Theme } from "../constants/colors";

export const HeroimageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  width: 100%;
  height: 500px;
  margin-top: 0;
  padding-top: 0;

  img {
    display: block;
    width: 100%;
    height: 425px;
    opacity: 0.5;
  }

  h1 {
    position: absolute;
    top: 300px;
    left: 150px;
    color: #fff;
    font-size: 50px;
    font-weight: 300;
    z-index: 1;
  }

  p {
    position: absolute;
    top: 350px;
    left: 155px;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-top: 15px;
    z-index: 1;
  }

  button {
    position: absolute;
    top: 425px;
    left: 150px;
    width: 225px;
    height: 50px;
    background-color: ${Theme.colors.secondary};
    color: ${Theme.colors.white};
    border: none;
    border-radius: 23px;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
    z-index: 1;
  }
`;

export const BsIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 110px;
  padding-right: 110px;
`;

export const BsIconsWrapper = styled.div`
  display: flex;
  font-size: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
`;

export const BsIconsText = styled.p`
  display: flex;
  color: ${Theme.colors.white};
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;
`;
