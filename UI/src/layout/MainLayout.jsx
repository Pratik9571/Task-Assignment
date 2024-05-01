import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import Footer from "../components/Footer";
import Services from "../pages/Services";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const MainLayout = () => {
  return (
    <Box>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default MainLayout;
