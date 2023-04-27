import React from "react";

const Footer = () => {
  return (
    <>
      {/* Start Footer */}
      <footer className="bg-gray-900 px-9 mt-28 " id="tempaltemo_footer">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="pt-5">
            <h2 className="text-2xl text-green-500 border-b-2 border-gray-200 mb-3">
              Zay Shop
            </h2>
            <ul className="list-none text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2" />
                123 Consectetur at ligula 10660
              </li>
              <li className="flex items-center">
                <i className="fa fa-phone mr-2" />
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="tel:010-020-0340"
                >
                  010-020-0340
                </a>
              </li>
              <li className="flex items-center">
                <i className="fa fa-envelope mr-2" />
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h2 className="text-2xl text-gray-200 border-b-2 border-gray-200 mb-3">
              Products
            </h2>
            <ul className="list-none text-gray-300">
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Luxury
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Sport Wear
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Men's Shoes
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Women's Shoes
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Popular Dress
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Gym Accessories
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Sport Shoes
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-5">
            <h2 className="text-2xl text-gray-200 border-b-2 border-gray-200 mb-3">
              Further Info
            </h2>
            <ul className="list-none text-gray-300">
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Shop Locations
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none hover:text-gray-100"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center flex-wrap">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="http://facebook.com/" target="_blank">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook-f text-gray-400 hover:text-white"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram text-gray-400 hover:text-white"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-gray-400 hover:text-white"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" target="_blank">
                  <span className="sr-only">LinkedIn</span>
                  <i className="fab fa-linkedin text-gray-400 hover:text-white"></i>
                </a>
              </li>
            </ul>
            <form className="ml-4 overflow-hidden">
              <label className="sr-only" for="subscribeEmail">
                Email address
              </label>
              <div className="flex flex-col sm:flex-row ">
                <input
                  type="email"
                  className="bg-gray-800 border-gray-700 rounded-t-md  sm:rounded-r-none py-2 px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 sm:mb-0 sm:rounded-r-md sm:mr-2"
                  id="subscribeEmail"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="bg-green-600 rounded-b-md sm:rounded-l-none sm:rounded-r-md px-4 py-2 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 md:flex md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              &copy; 2023 Company Name. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 md:ml-4">
              Designed by{" "}
              <a
                href="https://templatemo.com"
                target="_blank"
                className="text-green-500 hover:text-green-700"
              >
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* End Footer */}
    </>
  );
};

export default Footer;
