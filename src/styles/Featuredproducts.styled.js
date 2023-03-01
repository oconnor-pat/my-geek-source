import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { Theme } from "../constants/colors";

export const FeaturedProductsContainer = styled.div`
  display: flex;
  width: auto;
  height: 300px;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${Theme.colors.white};
`;
