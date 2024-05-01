import { Box } from "@mui/material";

const ProjectContainer = ({ imgUrl, children }) => {
  return (
    <Box
      sx={{
        width: "25%", // Adjust width to fit four images in a row
        height: "50vh",
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 255, 0.7), rgba(106, 106, 255, 0.3)), url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "0", // Remove margin
        opacity: 0.95, // Set opacity for all images
        padding: "2rem 2rem",
      }}
    >
      {children}
    </Box>
  );
};

export default ProjectContainer;
