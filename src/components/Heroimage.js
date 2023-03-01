import React from "react";
import bannerbackground from ".././assets/images/bannerbackground.jpg";
import {
  BsIconsContainer,
  BsIconsText,
  BsIconsWrapper,
  HeroimageContainer,
} from "../styles/Heroimage.styled";
import { BsTruck, BsCreditCard, BsHeadset } from "react-icons/bs";

const Heroimage = () => {
  return (
    <>
      <HeroimageContainer>
        <h1>CURVED 4K SMART TVs</h1>
        <p>Experience the action and drama like never before.</p>
        <button>SHOP NOW</button>
        <img src={bannerbackground} alt="move-theme" />
      </HeroimageContainer>
      <BsIconsContainer>
        <BsIconsWrapper>
          <BsTruck />
          <BsIconsText>
            FREE SHIPPING
            <br />
            on every order
          </BsIconsText>
        </BsIconsWrapper>
        <BsIconsWrapper>
          <BsCreditCard />
          <BsIconsText>
            0% Financing
            <br />
            on select products
          </BsIconsText>
        </BsIconsWrapper>
        <BsIconsWrapper>
          <BsHeadset />
          <BsIconsText>
            Free Tech Support
            <br />
            on all products
          </BsIconsText>
        </BsIconsWrapper>
      </BsIconsContainer>
    </>
  );
};

export default Heroimage;
