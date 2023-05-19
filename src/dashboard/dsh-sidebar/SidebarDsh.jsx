import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaDashcube,
  FaOutdent,
  FaProductHunt,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  BsBucketFill,
  BsFillGrid1X2Fill,
  BsFillHandbagFill,
  BsHouseCheck,
  BsOutlet,
  BsPersonAdd,
  BsPersonBadge,
} from "react-icons/bs";
import "./SidebarDsh.scss";
import { useSelector } from "react-redux";


const SidebarDsh = () => {
  const sidebarstate = useSelector((state) => state.sidebarstate);

  return (
    <div
      className={`   sidebar ${
        sidebarstate ? "sidebar-show" : "sidebar-hide"
      }  `}
    >
      <div className=" w-[100%] border-b-[1px] py-4 pb-6 border-b-zinc-600    ">
        <h1 className=" text-white text-center  ">
          <i className=" fa  ">
            <BsFillHandbagFill />
          </i>{" "}
          Store Admin{" "}
        </h1>
      </div>
      <div className="  flex flex-col justify-between  h-full">
        <div className=" flex  flex-col p-4 gap-1 text-sm  ">
          <NavLink to={"/dashboard/index"} className=" ">
            <div className=" flex items-center   rounded-md p-3 text-white cursor-pointer  ">
              <i className=" fa text-sm  mx-2">
                <BsFillGrid1X2Fill />
              </i>
              Home
            </div>
          </NavLink>
          <NavLink to={"/dashboard/products"} className=" ">
            <div className=" flex items-center rounded-md p-3 text-white hover:bg-zinc-600 cursor-pointer ">
              <i className=" fa text-sm  mx-2">
                <BsBucketFill />
              </i>
              Products
            </div>
          </NavLink>
          <NavLink to={"/dashboard/profile"} className=" ">
            <div className=" flex items-center   rounded-md p-3 text-white hover:bg-zinc-600 cursor-pointer ">
              <i className=" fa mx-2">
                <BsPersonBadge />
              </i>
              Profile
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col p-4 text-sm">
          <NavLink to={"/"} className=" ">
            <div className=" flex items-center   rounded-md mb-5 p-3 text-white hover:bg-zinc-600 cursor-pointer ">
              <i className=" fa  mx-2">
                <FaSignOutAlt />
              </i>
              back to website
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SidebarDsh;
