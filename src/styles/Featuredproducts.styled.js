import styled from "styled-components";
import { Theme } from "../constants/colors";

export const FeaturedProductsContainer = styled.div`
  display: flex;
  width: auto;
  height: 400px;
  flex-direction: row;
  align-items: center;
  margin: 50px 100px;
  padding: 50px auto;
  background-color: ${Theme.colors.white};
`;

export const FeaturedProductsImageWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const FeaturedProductsImage = styled.img`
  width: auto;
  height: 200px;
  border-radius: 10px;
  margin: 0 10px;
`;
