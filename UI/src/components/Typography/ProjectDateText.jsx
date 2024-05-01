import { Typography } from "@mui/material";

const ProjectDateText = ({ date }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: "2rem",
        textDecoration: "bold", // Corrected typo
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        textShadow: "2px 2px 10px black",
        opacity: 0.75,
      }}
    >
      {date}
    </Typography>
  );
};

export default ProjectDateText;
