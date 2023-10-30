import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ filterItem, navList }) => {
  return (
    <>
      <h1 className="heading">Order Your Favourite Dish</h1>
      <ul className="navbar">
        {navList.map((elem) => {
          return (
            <NavLink
              className="navItem"
              onClick={() => {
                filterItem(elem);
              }}
            >
              <li>{elem}</li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default Header;
