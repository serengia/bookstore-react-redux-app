import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
