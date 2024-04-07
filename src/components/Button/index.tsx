import classNames from "classnames";
import React, { HTMLAttributes } from "react";

import "./index.scss";

function Button({
  outline,
  children,
}: HTMLAttributes<HTMLButtonElement> & { outline?: boolean }) {
  return (
    <button className={classNames(outline && "__outline")}>{children}</button>
  );
}

export default Button;
