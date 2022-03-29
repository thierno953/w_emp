import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Page from "./components/Pages/Page";
import SectionFooter from "./components/sub_page/SectionFooter";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/BlogSingle";
import About from "./components/About";
import SectionService from "./components/sub_page/SectionService";
import People from "./components/People/People";
import PeopleSingle from "./components/People/PeopleSingle";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogSingle />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<SectionService />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleSingle />} />
        </Routes>
        <SectionFooter />
      </>
    </BrowserRouter>
  );
}

export default App;
