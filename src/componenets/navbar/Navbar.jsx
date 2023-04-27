import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StorePage from "../products/StorePage";

const Navbar = () => {
  const state = useSelector((state) => state.carts);
  const productlist = useSelector((state) => state.cartitems);

  const [on, setOn] = useState(false);
  const [store, setStoreOn] = useState(false);
  const [mob, setMob] = useState(false);

  const toggleNav = () => {
    setMob(!mob);
  };

  const toggleStore = () => {
    setStoreOn(!store);
  };

  return (
    <>
      <section className="navigation bg-gray-900 relative   shadow-md  shadow-gray-600 mb-2">
        <div className="nav-container bg-gray-900 ">
          <div className="brand ">
            <Link className=" " to={"/"}>
              🍀 Clover Clothing{" "}
            </Link>
          </div>
          <nav className=" ">
            <div className="store-mobile">
              <ul className=" nav-list  w-fit   ">
                <li className=" ">
                  <button
                    onClick={toggleStore}
                    className="stm text-slate-600 nav-link"
                  >
                    <i className=" text-blue-800 fa fa-store ">
                      {" "}
                      <span>{productlist.length}</span>{" "}
                    </i>
                  </button>
                </li>
              </ul>
            </div>
            <div
              className={`nav-mobile ease-in-out duration-300   `}
              onClick={toggleNav}
            >
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </div>
            <ul className={`nav-list flex   ${mob ? "visible" : "hidden"}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#!">Shop</a>
              </li>
              <li>
                <a href="#!" onClick={() => setOn(!on)}>
                  Services
                </a>
                <ul
                  className={`nav-dropdown ease-in-out duration-300 ${
                    on && " show "
                  }`}
                >
                  <li>
                    <a href="#!">Web Design</a>
                  </li>
                  <li>
                    <a href="#!">Web Development</a>
                  </li>
                  <li>
                    <a href="#!">Graphic Design</a>
                  </li>
                </ul>
              </li>
              <li className=" mr-7">
                <a href="#!">About Us</a>
              </li>
              <li>
                <a
                  className={`store  ${mob ? "hidden" : " visible"} `}
                  onClick={toggleStore}
                >
                  <i className=" text-blue-800 fa fa-store ">
                    <span>{productlist.length}</span>
                  </i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {store ? <StorePage cla="cart-open" />:<StorePage cla="cart-closed" />}
    </>
  );
};

export default Navbar;
