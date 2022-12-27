import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Main;
