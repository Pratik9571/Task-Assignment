import React from "react";
import { Box, Typography } from "@mui/material";
import plumbingHome from "../Images/plumbing-home.jpg";

const Home = () => {
  return (
    <Box>
      <Box
        name="suru ko haru"
        sx={{
          color: "black",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "calc(100vh - 100px)", // Adjusted to account for header height
          minWidth: "100vw",
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 255, 0.7), rgba(106, 106, 255, 0.3)), url(${plumbingHome})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            padding: "2rem 2rem",
            color: "white",
            zIndex: 1,
            fontWeight: "Bold",
          }}
        >
          Business Logo
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: "2rem", // Adjust the distance from the top as needed
            right: "1rem",
            zIndex: 1,
            display: "flex",
            gap: "2rem",
            alignContent: "right",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "white", cursor: "pointer", marginBottom: "1rem" }}
          >
            <a
              href="/home"
              style={{
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              Home
            </a>
          </Typography>
          <Typography variant="h5" sx={{ color: "white", cursor: "pointer" }}>
            <a
              href="/about"
              style={{
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              About
            </a>
          </Typography>

          <Typography variant="h5" sx={{ color: "white", cursor: "pointer" }}>
            <a
              href="/projects"
              style={{
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              Projects
            </a>
          </Typography>

          <Typography variant="h5" sx={{ color: "white", cursor: "pointer" }}>
            <a
              href="/services"
              style={{
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              Services
            </a>
          </Typography>

          <Typography variant="h5" sx={{ color: "white", cursor: "pointer" }}>
            <a
              href="/contact"
              style={{
                color: "inherit",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              Contact
            </a>
          </Typography>
          {/* Add space below the boxes */}
          {/* Add space below the boxes */}
          <Box>
            {/* Boxes above */}

            {/* Add space below the boxes */}
            <Box sx={{ marginBottom: "10vh" }} />
            {/* Add space below the boxes */}
            {/* Add space below the boxes */}
            <Box
              sx={{
                background: "Pink",
                minHeight: "83.2vh",
              }}
            >
              <Typography variant="h4">Building with Confidence</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
