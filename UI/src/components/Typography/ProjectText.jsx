import { Typography } from "@mui/material";

const ProjectText = (props) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: "4rem",
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        textShadow: "4px 4px 10px #000000bc",
        opacity: 0.8,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default ProjectText;
