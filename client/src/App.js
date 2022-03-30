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
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/features/authSlice";
import Dashboard from "./components/Admin/Dashboard";
import PrivateRoute from "./components/Admin/PrivateRoute";
import AddEditPerson from "./components/Admin/AddEditPerson";
import Private from "./components/Admin/Private/Private";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/addPerson"
            element={
              <PrivateRoute>
                <AddEditPerson />
              </PrivateRoute>
            }
          />
          <Route
            path="/editPerson/:id"
            element={
              <PrivateRoute>
                <AddEditPerson />
              </PrivateRoute>
            }
          />
          <Route
            path="/persons/search"
            element={
              <PrivateRoute>
                <Private />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
        <SectionFooter />
      </>
    </BrowserRouter>
  );
}

export default App;
