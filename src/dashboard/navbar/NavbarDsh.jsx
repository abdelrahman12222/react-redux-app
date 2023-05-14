import React from "react";
import { FaBell, FaDharmachakra, FaList, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./NavbarDsh.scss";
import { useDispatch } from "react-redux";
import { sidebar_btn } from "../../store/slices/SidebarDshSlice";
import { useSelector } from "react-redux";
const NavbarDsh = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const sidebarstate = useSelector((state) => state.sidebarstate);

  const sidebarmob = () => {
    dispatch(sidebar_btn());
  };

  // const closeSide=()=>{

  //   if(sidebarstate===true){

  //   }

  // }
  console.log(params);
  return (
    <>
      <nav className=" navbardsh     ">
        <div className="flex flex-col items-center">
          <ol class=" flex ">
            <li class="text-sm">
              <a class=" text-gray-400" href="javascript:;">
                Pages/
              </a>
            </li>
            <li class=" text-sm text-gray-900 active" aria-current="page">
              Dashboard
            </li>
          </ol>
          <a
            href="#"
            className="text-gray-700 font-serif font-bold mt-1 flex items-center"
          >
            Dashboard
          </a>
        </div>
        <div className="nav-items  ">
          <div className="flex gap-11 items-center md:order-2">
            <form className=" search">
              <label className="sr-only" htmlFor="search">
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm 
                  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder="Search..."
                  type="text"
                  name="search"
                />
              </div>
            </form>

            <div className="flex gap-2 items-center md:ml-auto ">
              <button
                type="button"
                onClick={sidebarmob}
                className=" text-gray-500 rounded-full   flex flex-row items-center  justify-center gap-3
                    focus:outline-none focus:ring-4 focus:ring-gray-300 mobile-menu"
              >
                <i className="fa hover:-translate-y-1 mx-1 ease-in-out duration-300 ">
                  <FaList />
                </i>
                <span className="">Menu</span>
                
              </button>
              <button
                type="button"
                className=" text-gray-500 rounded-full    focus:outline-none focus:ring-4 focus:ring-gray-300"
              >
                <span className="sr-only">Edit</span>
                <i className="fa hover:rotate-180 ease-in-out duration-300 ">
                  <FaDharmachakra />
                </i>
              </button>
              <button
                type="button"
                className="text-gray-500  rounded-full  border-0 focus:outline-none "
              >
                <i className="fa">
                  <FaBell />
                </i>
              </button>
              <Link className=" text-gray-500 text-sm flex">
                <i className="fa mx-1">
                  <FaUser />{" "}
                </i>{" "}
                SignOut{" "}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {sidebarstate && (
        <div onClick={sidebarmob} className=" fixed w-full h-full bg-gray-700 opacity-50 z-30">
          Blur
        </div>
      )}
    </>
  );
};
export default NavbarDsh;
