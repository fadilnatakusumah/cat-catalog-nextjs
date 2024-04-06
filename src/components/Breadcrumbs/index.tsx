import React from "react";
import { BreadcrumbsStyled } from "./index.styled";

function Breadcrumbs({ list = [], ...rest }: { list: string[] }) {
  return (
    <BreadcrumbsStyled {...rest}>
      {list.map((link, idx) => (
        <li key={idx}>{link}</li>
      ))}
    </BreadcrumbsStyled>
  );
}

export default Breadcrumbs;
