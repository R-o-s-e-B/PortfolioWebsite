import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop.jsx";
import Landing from "./components/Landing";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/footer";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
