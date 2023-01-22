import { formatDistanceToNow, subHours } from "date-fns";
import { v4 as uuid } from "uuid";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const donors = [
  {
    id: uuid(),
    name: "A+",
    imageUrl: "/images/avatar.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "O+",
    imageUrl: "/images/avatar.png",
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: "O+",
    imageUrl: "/images/avatar.png",
    updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(),
    name: "AB-",
    imageUrl: "/images/avatar.png",
    updatedAt: subHours(Date.now(), 5),
  },
  {
    id: uuid(),
    name: "O+",
    imageUrl: "/images/avatar.png",
    updatedAt: subHours(Date.now(), 9),
  },
];

export const YEBBLastDonors = (props) => {
  const { ...rest } = props;
  return (
    <Card {...rest}>
      <CardHeader
        subtitle={`${donors.length} in total`}
        title="اخر المتبرعين"
      />
      <Divider />
      <List>
        {donors.map((donor, i) => (
          <ListItem divider={i < donors.length - 1} key={donor.id}>
            <ListItemAvatar>
              <Avatar src={donor.imageUrl} />
            </ListItemAvatar>
            <ListItemText
              primary={donor.name}
              secondary={`اخر تحديث ${formatDistanceToNow(donor.updatedAt)}`}
            />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          إظهار الكل
        </Button>
      </Box>
    </Card>
  );
};
