import { Outlet, Route, Routes } from "react-router-dom";
import Categoryies from "./componenets/categories/Categoryies";
import Footer from "./componenets/footer/Footer";
import Navbar from "./componenets/navbar/Navbar";
import Slider from "./componenets/slider/Slider";
import ViewProduct from "./componenets/products/ViewProduct";
import { Audio, ColorRing, Grid } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import HomeDsh from "./dashboard/pages/HomeDsh";
import ProfileDsh from "./dashboard/pages/ProfileDsh";
import ProductDsh from "./dashboard/pages/ProductDsh";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import Login from "./dashboard/auth/Login";
import SignUp from "./dashboard/auth/SignUp";
function App() {
  const [userStatus, setUserStatus] = useState(false);
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
      }
    });
  }, []);
  return (
    <div className="App container-fluid  ">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/view/:id" element={<ViewProduct />} />
        </Route>

          <Route path="/dashboard" element={<Dashboard />}>
            {/* <Route path="/dashboard" element={<HomeDsh />} /> */}
            <Route path="index" element={<HomeDsh />} />
            <Route path="products" element={<ProductDsh />} />
            <Route path="profile" element={<ProfileDsh />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
        
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <Slider />
      <Categoryies />
    </>
  );
}

export function Loader() {
  return (
    <div className=" flex justify-center items-center  m-5 p-5 my-24">
      {" "}
      <ColorRing
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=" m-auto"
        visible={true}
      />
    </div>
  );
}

export default App;
