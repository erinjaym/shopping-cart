import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="homepage" className="homepage">
      <Link to="/shopping-cart/Shop" className="shop-now-button-wrapper">
        <button class="shop-now-btn">Shop Now</button>
      </Link>
    </div>
  );
};
export default Home;
