import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HomeCard from "./cards/HomeCard";
import NavbarDsh from "./navbar/NavbarDsh";
import SidebarDsh from "./dsh-sidebar/SidebarDsh";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../Firebase";

const Dashboard = () => {
  const [userStatus, setUserStatus] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        setUserStatus(true);
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        setUserStatus(false);
        console.log("user is logged out");
        navigate("/login");
      }
    });
  }, []);

  return(

    userStatus&&  (
      
      <div className=" flex min-h-screen gap-1 overflow-hidden max-h-screen   bg-gray-200   ">
      <SidebarDsh />
      <div className="    w-full flex  flex-col overflow-auto   ">
      <NavbarDsh />
      <Outlet />
      </div>
      </div>
      )
    
      );
  
};

export default Dashboard;
