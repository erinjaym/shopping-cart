import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="homepage" className="homepage" >
            <Link to="/Shop" className="shop-button">Shop Now</Link>
        </div>
    );
};
export default Home;