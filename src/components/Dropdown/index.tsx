"use client";

import React, { useRef, useState } from "react";
import classnames from "classnames";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

import "./index.scss";
import { useOnClickOutside } from "usehooks-ts";

function Dropdown({
  placeholder = "",
  options = [],
  withBorder = true,
}: {
  options: string[];
  placeholder: string;
  withBorder?: boolean;
}) {
  const ref = useRef(null);
  const [selectedOption, setOptions] = useState(null);
  const [show, setShow] = useState(false);

  function handleClickOutside() {
    setShow(false);
  }

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div ref={ref} className={classnames("dropdown-wrapper")}>
      <div
        className={classnames(withBorder && "with-border")}
        onClick={() => setShow(!show)}
      >
        {selectedOption ?? placeholder}
        <FaChevronDown />
      </div>
      {show && (
        <ul className="dropdown-options">
          {options.map((label, key) => (
            <li key={key}>{label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
