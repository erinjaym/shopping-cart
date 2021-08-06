import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/Shop">
                <li>Shop</li>
            </Link>
            <Link to="/Cart">
                <li>Cart</li>
            </Link>
        </nav>
    );
};
export default Nav;