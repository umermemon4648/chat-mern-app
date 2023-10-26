import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
const DefaultLayout = () => {
  return (
    <div className="">
      {/* <h2>Default Layout</h2> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
