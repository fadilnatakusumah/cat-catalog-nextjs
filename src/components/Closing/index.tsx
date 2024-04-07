import React from "react";
import { MdEmail } from "react-icons/md";
import Button from "../Button";

import "./index.scss";
// import HeroImg from "@/assets/images/cat-hero.png";

function Closing() {
  return (
    <div className="closing-wrapper">
      <div className="closing-content">
        <div>Sign Up And Get Latest Cats Update</div>
        <div className="closing-email">
          <input placeholder="Enter your email" />
          <MdEmail />
        </div>
        <Button>Subscribe Now</Button>
      </div>
    </div>
  );
}

export default Closing;
