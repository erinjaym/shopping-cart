import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import ShoppingCart from "./images/shoppingcart.svg";
import { useEffect, useState } from "react";

const Nav = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navClasses = ["nav"];
  if (scrolled) {
    navClasses.push("scrolled");
  }

  return (
    <nav>
      <div id="logo" className="logo">
        The Daruma Store
      </div>
      <ul id="links" className="nav-links">
        <Link to="/shopping-cart">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/shopping-cart/Shop">
          <li className="nav-link">Shop</li>
        </Link>

        <div id="shopping-cart-float" className={navClasses.join(" ")}>
          <Link to="/shopping-cart/Cart">
            <li className="nav-link">
              <img alt="shopping cart" src={ShoppingCart}></img>
              {props.count}
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};
export default Nav;
