import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/videos/:videoId" element={<Video></Video>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
