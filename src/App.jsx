import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./containers/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelDetails from "./containers/HotelDetails";
import Login from "./containers/Login";
import Userprovider from "./components/Userprovider";

function App() {
  return (
    <div>
      <Userprovider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/hotel-details/:slug" element={<HotelDetails />} />
          </Routes>
        </BrowserRouter>
      </Userprovider>
    </div>
  );
}

export default App;
