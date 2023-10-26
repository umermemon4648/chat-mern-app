import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { Footer } from "@mantine/core";
const DefaultLayout = () => {
  return (
    <div>
      {/* <h2>Default Layout</h2> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
