import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ServiceCard = ({ title, isLong = false, children }) => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        height: "25rem",
        width: isLong ? "60rem" : "50rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: "9999",
          height: "110%",
          width: "105%",
          background: "white",
          border: "1px solid skyblue",
        }}
      >
        <Box padding={"3rem"}>
          <Typography
            variant="h3"
            color="rgb(3, 101, 214)"
            sx={{ fontFamily: "Adelle Sans Devanagari" }}
          >
            {title}
          </Typography>
          <a style={{ fontSize: "2rem", color: "black" }}>{children}</a>
        </Box>

        {/* <Button
          variant="text"
          size="2rem"
          sx={{
            marginLeft: "0.5rem",
            color: "#3bb1ff",
            width: "90rem",
            height: "55 rem",
            padding: "12rem 2rem",
          }}
        >
          View Details
          <ArrowForwardIcon />
        </Button> */}
      </Box>
      <Box
        sx={{
          background: "blue",
          position: "relative",
          bottom: "20%",
          right: isLong ? "-97%" : "-95%",
          width: "100px",
          height: "100px",
          zIndex: "999",
        }}
      >
        &nbsp;
      </Box>
    </Box>
  );
};

export default ServiceCard;
