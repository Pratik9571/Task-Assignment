import { Box, Typography } from "@mui/material";
import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import WhatsApp from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        background: "#5072A7",
        width: "100%",
        position: "revert",
        bottom: 0,
        zIndex: 1000,
        padding: "2rem",
      }}
    >
      <Typography>
        Copyright ©2023 - All rights reserved. Designed By{" "}
        <a href="/Link" style={{ color: "white", textDecoration: "underline" }}>
          Uptech Solutions
        </a>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        {/* Social handle logos */}
        <a href="www.instagram.com" style={{ color: "white" }}>
          <Instagram sx={{ fontSize: "1rem" }} />
        </a>
        <a href="www.linkedin.com" style={{ color: "white" }}>
          <LinkedIn sx={{ fontSize: "1rem" }} />
        </a>

        <a href="www.whatsapp.com" style={{ color: "white" }}>
          <WhatsApp sx={{ fontSize: "1rem" }} />
        </a>
      </Box>
    </div>
  );
};

export default Footer;
