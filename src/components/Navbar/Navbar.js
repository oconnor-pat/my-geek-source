/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavbarContainer } from "../../styles/Navbar.styled";
import { BsChevronDown } from "react-icons/bs";

function Navbar() {
  return (
    <NavbarContainer>
      <nav>
        <ul>
          <li>
            <a href="#">
              Products <BsChevronDown />
            </a>
            {/*             <ul>
              <li>
                <a href="#">Product 1</a>
              </li>
              <li>
                <a href="#">Product 2</a>
              </li>
              <li>
                <a href="#">Product 3</a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href="#">
              Recently Viewed <BsChevronDown />
            </a>
            {/*             <ul>
              <li>
                <a href="#">Recently Viewed 1</a>
              </li>
              <li>
                <a href="#">Recently Viewed 2</a>
              </li>
              <li>
                <a href="#">Recently Viewed 3</a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href="#">
              Saved Items <BsChevronDown />
            </a>
            {/* <ul>
              <li>
                <a href="#">Saved Item 1</a>
              </li>
              <li>
                <a href="#">Saved Item 2</a>
              </li>
              <li>
                <a href="#">Saved Item 3</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </nav>
    </NavbarContainer>
  );
}

export default Navbar;
