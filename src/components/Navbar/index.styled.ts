"use client";

import styled from "styled-components";

export const NavbarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  .nav-wrapper {
    display: flex;
    align-items: center;
    height: 100%;

    .nav-button {
      background-color: black;
      color: white;
      width: 80px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all .5s;

      &:hover {
        background-color: #4f4f4f;
        font-size: x-large;
      }
    }

    .nav-title {
      font-size: 24px;
      font-weight: bold;
      margin: 0 20px;
    }
  }

  .nav-cart {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 130px;
    height: 100%;
  }
`;
