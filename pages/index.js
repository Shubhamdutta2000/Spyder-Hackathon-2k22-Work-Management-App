/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";
import Login from "./auth/login"
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

// import '../styles/index.css';

export default function Index() {

  return (
    <div className="my-10 bg-blueGray-800">
      <h1 className="text-4xl font-normal leading-normal mt-0 mb-2 text-center text-white p-8">
        Welcome to Workflow Management App
      </h1>
      <Login />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
