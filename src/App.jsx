import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Comments from "./pages/Comments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/photos" element={<Photos />} />
              <Route path="/comments" element={<Comments />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
