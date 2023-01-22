import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { YEBBNavBar } from "./yebb-nav-bar";
import { YEBBSlideBar } from "./yebb-slide-bar";

const YEBBLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  // backgroundColor: "red",
  [theme.breakpoints.up("lg")]: {
    paddingRight: 280,
  },
}));

const YEEBLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  //TODO -- add authGaurd authentication
  return (
    <>
      <YEBBLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </YEBBLayoutRoot>
      <YEBBSlideBar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
      <YEBBNavBar onSidebarOpen={() => setSidebarOpen(true)} />
    </>
  );
};
export default YEEBLayout;
