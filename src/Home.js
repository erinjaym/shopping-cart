import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="homepage" className="homepage">
      <Link to="/shopping-cart/Shop" className="shop-now">
        <div>Shop Now</div>
      </Link>
    </div>
  );
};
export default Home;
