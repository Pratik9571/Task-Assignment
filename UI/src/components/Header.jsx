import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
];

const Header = () => {
  return (
    <AppBar
      component="header"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        color: "black",
        background: "#6CB4EE",
        width: "100%",
        top: 0,
        padding: "0.5rem 0.5rem",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "2px 2px",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1rem 1rem",
        }}
      >
        <Typography variant="h5">Mon-Fri : 9AM-5PM</Typography>
        <Typography variant="h5">yourbusiness@business.com</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "2px 2px",
          gap: "1rem",
          padding: "1rem 1rem",
        }}
      >
        {/* Social handle logos */}
        <a href="www.instagram.com" style={{ color: "Black" }}>
          <InstagramIcon />
        </a>
        <a href="www.linkedin.com" style={{ color: "Black" }}>
          <LinkedInIcon />
        </a>

        <a href="www.whatsapp.com" style={{ color: "Black" }}>
          <WhatsAppIcon />
        </a>
      </Box>
    </AppBar>
  );
};

export default Header;
