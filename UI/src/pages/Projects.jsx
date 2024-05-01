import { Box, Typography } from "@mui/material";
import React from "react";
import first from "../Images/p4.jpg";
import second from "../Images/p5.jpg";
import third from "../Images/p6.jpg";
import fourth from "../Images/p7.jpg";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import circleMan from "../Images/man.jpg";
import Text from "../components/Typography/ProjectText";
import Container from "../components/Containers/ProjectContainer";
import DateText from "../components/Typography/ProjectDateText";

const Projects = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100%",
          background: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: "white",
            color: "#065f9b",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "3rem",
              textAlign: "center", // Center text horizontally
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: "Arial" }}>
              Honorable Mentions
            </Typography>
            <Typography
              sx={{
                fontFamily: "Cooper",
                fontWeight: "bold",
                fontSize: "8rem",
                textDecoration: "bold", // Corrected typo
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              sx={{
                fontFamily: "Arial",
                marginTop: "2rem",
                fontWeight: "bold", // Corrected typo
                fontSize: "2rem",
                textDecoration: "bold", // Corrected typo
              }}
            >
              Some of the projects Business Name repaired.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around", // Adjust as needed
            background:
              "linear-gradient(to top, rgb(0, 0, 0), rgba(1, 1, 139, 0.3))", // Apply linear gradient backgrounds
          }}
        >
          <Container imgUrl={first}>
            <Text>Project Title 01</Text>
            <DateText date={"Jan 15, 2020"} />
          </Container>
          <Container imgUrl={second}>
            <Text>Project Title 02</Text>
            <DateText date={"Jan 15, 2020"} />
          </Container>
          <Container imgUrl={third}>
            <Text>Project Title 03</Text>
            <DateText date={"Jan 15, 2020"} />
          </Container>
          <Container imgUrl={fourth}>
            <Text>Project Title 04</Text>
            <DateText date={"Jan 15, 2020"} />
          </Container>
        </Box>
        {/* ---  */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "50vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              padding: "12rem 12rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "27px",
                color: "#0077ff",
                display: "flex",
              }}
            >
              What our clients say
            </Typography>
            <Typography
              sx={{
                fontSize: "7rem",
                color: "#0059bf",
                display: "flex",
                fontFamily: "Arial",
                fontWeight: "Bold",
                marginTop: "20px", // Adjust as needed
                lineHeight: "1", // Reduce the line height
              }}
            >
              Clients
              <br style={{ lineHeight: "0" }} /> Testimonials
            </Typography>
            <p
              style={{
                fontSize: "30px",
                color: "#000000",
                display: "flex",
              }}
            >
              Here&apos;s what our Customers are saying about
              <br style={{ lineHeight: "0" }} /> Your Business Name LLC
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              backgroundImage: `linear-gradient(to top, rgba(13, 0, 255, 0.638), rgba(0, 85, 255, 0.456)), url(${fourth})`, // Apply gradient to the first image
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "27vh",
              opacity: "0.5",
              width: "30%",
              marginTop: "6rem",
              position: "relative", // Set parent box to relative positioning
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "2rem 2rem",
              }}
            >
              <Box sx={{ alignSelf: "flex-end" }}>
                <FormatQuoteIcon sx={{ fontSize: "3rem" }} />
              </Box>
              <Typography style={{ fontSize: "2rem" }}>
                We have used Your Business Name LLC for several years and
                consider Tim and his men as a part of our company. Great
                customer service and very fast service. I&apos;m thankful to
                have such a reliable, express, and trustworthy company to work
                with.
              </Typography>
              <Typography
                style={{
                  fontSize: "2rem",
                  alignSelf: "flex-end",
                  marginTop: "7rem",
                }}
              >
                - John F. Kennedy
              </Typography>

              {/* Circular box at bottom left */}
              <Box
                sx={{
                  position: "absolute", // Set to absolute positioning
                  bottom: 5, // Align to the bottom
                  left: 5, // Align to the left
                  backgroundColor: "#00b7ff",
                  borderRadius: "100%", // Make it circular
                  width: "200px", // Decrease the width
                  height: "200px", // Decrease the height
                  transform: "translate(-50%, 50%)", // Translate to bottom left corner
                  padding: "10px", // Add padding to create a gap
                }}
              >
                <img
                  src={circleMan}
                  alt="John"
                  style={{
                    width: "100%", // Make the image fill the box horizontally
                    height: "100%", // Make the image fill the box vertically
                    borderRadius: "100%", // Make it circular
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Projects;
