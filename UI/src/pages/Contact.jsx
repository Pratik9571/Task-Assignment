import { Box, TextField, TextareaAutosize, Typography } from "@mui/material";
import React from "react";
import image from "../Images/p5.jpg";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          minWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "45vh",
            width: "100%",
            backgroundImage: `url(${image})`, // Set the image background
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative", // Set to relative positioning
          }}
        >
          {/* Apply linear gradient background */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 81, 255, 0.639), rgba(1, 109, 139, 0.406))",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center vertically
              width: "100%", // Ensure the Box spans the entire width
              padding: "8rem 8rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                color: "#00fff2",
                margin: 0, // Remove margin
              }}
            >
              Have some works for us?
            </Typography>
            <Typography
              sx={{
                fontSize: "7rem",
                color: "white",
                display: "flex",
                fontFamily: "Arial",
                fontWeight: "bold",
                margin: 0, // Remove margin
              }}
            >
              Request a Quote Today
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                color: "white",
                display: "flex",
                fontFamily: "Arial",
              }}
            >
              Please contact us with all your water needs. We look forward to
              serving you.
            </Typography>
          </Box>

          {/* Overlapping Box at bottom left */}
        </Box>
        <Box
          sx={{
            position: "absolute", // Set to absolute positioning
            background: "white",
            width: "auto", // Adjust width as needed
            height: "auto", // Adjust height as needed
            margin: "45rem 15rem", // Adjust margin as needed
            boxShadow: "rgb(0, 183, 255) 10px 10px", //! euta arko thau ma pani rakhnu xa
            padding: "5rem 5rem", // Add padding to create space for the form elements
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: "3rem",
              color: "#0059bf",
              fontFamily: "Arial",
              fontWeight: "Bold",
            }}
          >
            Request A Free Quote
          </Typography>
          {/* Form */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              color: "black",
              background: "white",
              gap: "1rem", // Add gap between form elements
              width: "100%",
            }}
          >
            {/* Input fields */}
            <div>
              <label htmlFor="name" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                style={{
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  fontSize: "25px",
                }} // Style input fields
              />
            </div>
            <div>
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                style={{
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  fontSize: "25px",
                }} // Style input fields
              />
            </div>

            <div>
              <label htmlFor="contact" />
              <input
                type="contact"
                id="contact"
                name="contact"
                placeholder="Contact Number"
                style={{
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  fontSize: "25px",
                }} // Style input fields
              />
            </div>

            <div>
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                style={{
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  fontSize: "25px",
                }} // Style input fields
              />
            </div>

            <div>
              <label htmlFor="service" />
              <input
                type="service"
                id="service"
                name="service"
                placeholder="Service title"
                style={{
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  fontSize: "25px",
                }} // Style input fields
              />
            </div>

            <div>
              <label htmlFor="service description" />
              <TextareaAutosize
                type="service description"
                id="service description"
                name="service description"
                placeholder="Service Description"
                style={{
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "100%",
                  height: "9vh",
                  fontSize: "25px",
                  resize: "vertical",
                }} // Style input fields
              />
            </div>
            {/* Additional form fields as needed */}

            {/* Submit button */}
            <button
              type="submit"
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                background: "#007bff",
                color: "white",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)", // Add a subtle shadow for depth
              }}
            >
              Submit
            </button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
