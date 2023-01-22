import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
export const YEBBLogo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === "light" ? "#C1C4D6" : "#5048E5";

  return (
    <>
      <div style={{ display: "flex" }}>
        <Avatar
          src="/images/logo.png"
          sx={{ mr: 2, width: 40, height: 60 }}
          variant="rounded"
        >
          YEBB
        </Avatar>
      </div>
    </>
  );
})``;

YEBBLogo.defaultProps = {
  variant: "primary",
};

YEBBLogo.propTypes = {
  variant: PropTypes.oneOf(["light", "primary"]),
};
