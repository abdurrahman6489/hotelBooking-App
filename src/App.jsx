import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./containers/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelDetails from "./containers/HotelDetails";
import Login from "./containers/Login";
import Userprovider from "./components/Userprovider";
import Layout from "./containers/Layout";

function App() {
  return (
    <div>
      <Userprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <Layout>
                  <Homepage />
                </Layout>
              }
            />
            <Route
              path="/hotel-details/:slug"
              element={
                <Layout>
                  <HotelDetails />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Userprovider>
    </div>
  );
}

export default App;
