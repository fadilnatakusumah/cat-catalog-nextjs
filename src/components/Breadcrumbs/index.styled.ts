"use client";

import styled from "styled-components";

export const BreadcrumbsStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;

  > li:not(:last-child) {
    color: gray;
  }

  > li:not(:last-child):after {
    content: ">";
    margin: 0 4px;
  }
`;
