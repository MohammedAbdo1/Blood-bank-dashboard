import { Box, Card, Typography } from "@mui/material";

export const ToolBar = (props) => {
  const { children, title } = props;
  return (
    <>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box
        sx={{
          //   backgroundColor: "red",
          mt: -0.4,
          width: "100%",
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {children}
      </Box>
    </>
  );
};
