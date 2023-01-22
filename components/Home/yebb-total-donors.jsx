import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

export const YEEBTotalDonors = (props) => {
  const { ...rest } = props;
  return (
    <Card {...rest}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              إجمالي المتبرعين
            </Typography>
            <Typography color="textPrimary" variant="h4">
              1,6k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "success.main",
                height: 56,
                width: 56,
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pt: 2,
          }}
        >
          <ArrowUpwardIcon color="success" />
          <Typography color="textSecondary" variant="caption">
            منذ اخر شهر
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mr: 1,
            }}
          >
            16%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
