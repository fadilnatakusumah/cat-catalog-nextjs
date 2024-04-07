import React from "react";

import "./index.scss";

import HeroImg from "@/assets/images/cat-hero.png";
import Image from "next/image";
import Button from "../Button";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div>
        <div className="hero-greetings">
          <h1>Love your Pet, Care Pet,</h1>
          <p>Pet Car services and best quality Pet for your Home</p>
          <div>
            <Button>Shop Now</Button>
            <Button outline>Get Pets</Button>
          </div>
        </div>
        <div>
          <Image src={HeroImg} width={400} height={400} alt="hero-cat" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
