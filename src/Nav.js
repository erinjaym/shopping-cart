import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div id="logo">The Daruma Store</div>
            <ul id="links" className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/Shop">
                    <li>Shop</li>
                </Link>
                <Link to="/Cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    );
};
export default Nav;