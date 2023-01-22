import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

export const YEEBTotalNeeders = (props) => {
  const { ...rest } = props;
  return (
    <Card {...rest}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              إجمالي المحتاجين للدم
            </Typography>
            <Typography color="textPrimary" variant="h4">
              5,6k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "error.main",
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
          <ArrowDownwardIcon color="error" />
          <Typography color="textSecondary" variant="caption">
            منذ اخر شهر
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mr: 1,
            }}
          >
            50%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
