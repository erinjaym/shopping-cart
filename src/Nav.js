import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div id="logo" className="logo">The Daruma Store</div>
            <ul id="links" className="nav-links">
                <Link to="/">
                    <li className="nav-link">Home</li>
                </Link>
                <Link to="/Shop">
                    <li className="nav-link">Shop</li>
                </Link>
                <Link to="/Cart">
                    <li className="nav-link">Cart</li>
                </Link>
            </ul>
        </nav>
    );
};
export default Nav;