import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  v1BtnStyle: {
    backgroundColor: "#3c52b2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "gray",
      borderColor: "black",
    },
  },
});
export const V1YEBBButton = (props) => {
  const { title } = props;
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.v1BtnStyle}>
      {title}
    </Button>
  );
};
