import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
} from "react";
import { SearchInputStyled } from "./index.styled";

function SearchInput(
  props: DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <SearchInputStyled {...props} />;
}

export default SearchInput;
