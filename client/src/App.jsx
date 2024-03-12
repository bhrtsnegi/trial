import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./pages/Signin";
import { About } from "./pages/About";
import { Homepage } from "./pages/Homepage";
import { Signup } from "./pages/Signup";
import { Message } from "./pages/Message";
import Dashboard from "./pages/Dashboard";
import { Header } from "./components/Header";
import { FooterComp } from "./components/FooterComp";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import { CreatePost } from "./pages/CreatePost";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
        <Route path="/message" element={<Message />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
