import React from "react";
import bannerbackground from ".././assets/images/bannerbackground.jpg";
import { HeroimageContainer } from "../styles/Heroimage.styled";

const Heroimage = () => {
  return (
    <HeroimageContainer>
      <h1>CURVED 4K SMART TVs</h1>
      <p>Experience the action and drama like never before.</p>
      <button>SHOP NOW</button>
      <img src={bannerbackground} alt="move-theme" />
    </HeroimageContainer>
  );
};

export default Heroimage;
