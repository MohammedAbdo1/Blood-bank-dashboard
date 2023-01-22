import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const YEBBTotalProcess = (props) => {
  const { ...rest } = props;
  return (
    <Card {...rest}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              عمليات البحث عن الدم
            </Typography>
            <Typography color="textPrimary" variant="h4">
              50k
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "secondary.main",
                height: 56,
                width: 56,
              }}
            >
              <SpellcheckIcon />
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
          <ArrowDownwardIcon color="info" />
          <Typography color="textSecondary" variant="caption">
            منذ اخر شهر
          </Typography>
          <Typography
            variant="body2"
            sx={{
              mr: 1,
            }}
          >
            25%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
