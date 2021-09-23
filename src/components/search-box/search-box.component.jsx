import React from "react";
import "./search-box.styles.css";

export const Search = ({ placeHolder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeHolder}
    onChange={handleChange}
  />
);
