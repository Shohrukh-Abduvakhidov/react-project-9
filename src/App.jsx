import React from "react";
import "./App.css"
import burger from "./assets/burger.png"
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./homePage.jsx";
import BlogPage from "./BlogPage.jsx";
import About from "./About";
import Nothing from "./Nothing.jsx";
import logo from "./assets/Logo (8).png"
import Pricing from "./Pricing.jsx";
import Contact from "./Contact.jsx";
import Detail from "./Detail.jsx";
const App = () => {
  return (
    <>
      <navbar className="w-[90%] m-auto flex gap-20 items-center justify-between py-[20px]">
        <aside className="m-0">
          <img src={logo} alt="" className="m-0" />
        </aside>
        <aside className="flex gap-20 m-0">
          <ul className="hidden lg:flex gap-[20px]">
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/blog">Blog</Link>
            </li>
            <li>
            <Link to="/pricing">Pricing</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/detail">Detail Blog</Link>
            </li>
          </ul>
          <img
            src={burger}
            alt=""
            className="block m-0 lg:hidden w-[60px] h-[50px] px-[10px]"
          />
          <button
            id="but-2"
            className="hidden lg:block border-b-2 py-[6px] border-[#000000]"
          >
            Contact Us -&gt;
          </button>
        </aside>
      </navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Nothing />} />
      </Routes>
    </>
  );
};

export default App;
