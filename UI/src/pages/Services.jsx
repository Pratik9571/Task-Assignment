import { Box, Typography, Button } from "@mui/material";
import React from "react";
import ServiceCard from "../components/Containers/ServiceCard";

const Services = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          minWidth: "100%",
          background: "white",
          padding: "4rem 4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            // background: "red",
            margin: "0",
          }}
        >
          <p
            style={{
              color: "#065f9b",
              fontSize: "2.5rem",
              margin: "0",
              fontFamily: "Arial",
            }}
          >
            What are we offering
          </p>
          <p
            style={{
              color: "#065f9b",
              fontSize: "5rem",
              fontFamily: "Times New Roman",
              margin: "0",
              fontWeight: "bold",
            }}
          >
            Our Services
          </p>
          <p
            style={{
              color: "#00000068",
              fontSize: "2rem",
              margin: "0",
              fontFamily: "Arial",
            }}
          >
            No job is too big or too small for the crew at Your Business Name
            LLC
          </p>
          {/* Boxes */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap", // Allows wrapping to the next line
              gap: "6rem",
              width: "80%",
            }}
          >
            <ServiceCard title="Plumbing">
              Business Name employs access to an exclusive team of certified
              plumbing contractors, with 24-hour plumbing services available at
              cost efficient pricing.
            </ServiceCard>
            <ServiceCard title="Plumbing">
              Business Name employs access to an exclusive team of certified
              plumbing contractors, with 24-hour plumbing services available at
              cost efficient pricing.
            </ServiceCard>
            <ServiceCard title="Plumbing" isLong={true}>
              Business Name employs access to an exclusive team of certified
              plumbing contractors, with 24-hour plumbing services available at
              cost efficient pricing.
            </ServiceCard>
            <ServiceCard title="Plumbing" isLong={true}>
              Business Name employs access to an exclusive team of certified
              plumbing contractors, with 24-hour plumbing services available at
              cost efficient pricing.
            </ServiceCard>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Services;
