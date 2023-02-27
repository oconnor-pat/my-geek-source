import styled from "styled-components";
import { Theme } from "../constants/colors";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-left: 100px;
  margin-right: 100px;
  background-color: ${Theme.colors.secondary};
  width: auto;
  height: 50px;

  li {
    display: inline-block;
    top: 10px;
    margin: 0 10px;
    padding: 0 10px;
    position: relative;
    font-size: 1.2rem;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${Theme.colors.white};
  }
`;
