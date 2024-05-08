import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/navbar";
import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Portfolio from "./pages/portfolio";
import Feedback from "./pages/feedback";
import Contact from "./pages/contact";
import NoPage from "./pages/nopage";
import ScrollToTop from "./components/scrollRestoration";
import Footer from "./components/footer";

function App() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".navbarAnimation", { duration: 1, y: -500, stagger: 0.2 });
    gsap.from(".contentRevealAnimation", {
      duration: 1,
      opacity: 0,
      delay: 2,
      stagger: 0.3,
    });
    gsap.from(".footerAnimation", {
      duration: 1,
      opacity: 0,
      stagger: 0.5,
    });
  });
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
