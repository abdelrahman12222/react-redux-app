import { Outlet, Route, Routes } from "react-router-dom";
import Categoryies from "./componenets/categories/Categoryies";
import Footer from "./componenets/footer/Footer";
import Navbar from "./componenets/navbar/Navbar";
import Slider from "./componenets/slider/Slider";
import ViewProduct from "./componenets/products/ViewProduct";
import { Audio, ColorRing, Grid } from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./dashboard/profile/profile";
import HomeDsh from "./dashboard/pages/HomeDsh";
import ProfileDsh from "./dashboard/pages/ProfileDsh";
import ProductDsh from "./dashboard/pages/ProductDsh";
function App() {
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
        <Route path="/dashboard" element={<HomeDsh />}/>
          <Route path="products" element={<ProductDsh />} />
          <Route path="profile" element={<ProfileDsh />} />
        </Route>
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
