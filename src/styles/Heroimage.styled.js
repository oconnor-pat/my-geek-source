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
    width: 100%;
    height: 425px;
    opacity: 0.5;
    position: relative;
  }

  h1 {
    position: absolute;
    top: 300px;
    left: 100px;
    color: #fff;
    font-size: 50px;
    font-weight: 300;
    z-index: 1;
  }

  p {
    position: absolute;
    top: 350px;
    left: 100px;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    margin-top: 15px;
    z-index: 1;
  }

  button {
    position: absolute;
    top: 400px;
    left: 100px;
    width: 150px;
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
