import React, {useEffect} from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Albums from "./pages/Albums";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter >

        <Navbar />
        <main>

          <Routes>

            <Route path='/' element={<Home />} />            
            <Route path='/about' element={<About />} />
            <Route path='/albums' element={<Albums />} />
            <Route path="*" element={<Error />} />

          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </>
  );
};

export default App;