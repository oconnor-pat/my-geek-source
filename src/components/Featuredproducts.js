/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  FeaturedProductsContainer,
  FeaturedProductsImage,
  FeaturedProductsImageWrapper,
} from "../styles/Featuredproducts.styled";
import SamsungTV from "../assets/images/SamsungTV.jpg";

const FeaturedProducts = () => {
  return (
    <>
      <FeaturedProductsContainer>
        <h1>Featured Products</h1>
        <FeaturedProductsImageWrapper>
          <FeaturedProductsImage src={SamsungTV} alt="Samsung TV" />
          <FeaturedProductsImage src={SamsungTV} alt="Samsung TV" />
          <FeaturedProductsImage src={SamsungTV} alt="Samsung TV" />
          <FeaturedProductsImage src={SamsungTV} alt="Samsung TV" />
        </FeaturedProductsImageWrapper>
      </FeaturedProductsContainer>
    </>
  );
};

export default FeaturedProducts;
