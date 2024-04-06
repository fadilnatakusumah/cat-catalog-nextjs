import React from "react";
import { FaBurger } from "react-icons/fa6";
import { NavbarStyled } from "./index.styled";

function Navbar() {
  return (
    <NavbarStyled>
      <div className="nav-wrapper">
        <div className="nav-button">
          <FaBurger />
        </div>
        <div className="nav-title">Footopia</div>
      </div>
      <div className="nav-cart">0 in Bag</div>
    </NavbarStyled>
  );
}

export default Navbar;
