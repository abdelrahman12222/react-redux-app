import React from "react";
import { Link, Outlet } from "react-router-dom";
import HomeCard from "./cards/HomeCard";
import NavbarDsh from "./navbar/NavbarDsh";
import SidebarDsh from "./dsh-sidebar/SidebarDsh";

const Dashboard = () => {
  return (
    <div className=" flex min-h-screen gap-1 overflow-hidden max-h-screen   bg-gray-200   ">
      <SidebarDsh />
      <div className="    w-full flex  flex-col overflow-auto   ">
        <NavbarDsh />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
