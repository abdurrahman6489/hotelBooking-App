import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
const Layout = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) navigate("/");
      console.log(user);
    });
  }, []);
  return (
    <>
      <Navbar />
      {children};
    </>
  );
};

export default Layout;
