import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ChartBar as ChartBarIcon } from "../../icons/chart-bar";
import { Cog as CogIcon } from "../../icons/cog";
import { Users as UsersIcon } from "../../icons/users";
import { Bell as BellIcon } from "../../icons/bell";
import { YEBBLogo } from "./yebb-logo";
import { Payment as PaymentIcon } from "../../icons/payment";
import { Flag as FlagIcon } from "../../icons/flag";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { YEBBNavItem } from "./yebb-nav-item";
import { DIVIDER_COLOR, SLIDER_BAR_BACKGROUND_COLOR } from "../../constant";
import { UserCircle as UserCircleIcon } from "../../icons/user-circle";
const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "الرئيسية",
  },
  {
    href: "/donors",
    icon: <UsersIcon fontSize="small" />,
    title: "المتبرعين",
  },
  {
    href: "/reports",
    icon: <AutoGraphIcon fontSize="small" />,
    title: "التقارير والإحصائيات",
  },

  {
    href: "/special-events",
    icon: <FlagIcon fontSize="small" />,
    title: "مناسبات خاصة",
  },
  {
    href: "/users",
    icon: <UsersIcon fontSize="small" />,
    title: "مستخدمي النظام",
  },
  {
    href: "/search-operations",
    icon: <PaymentIcon fontSize="small" />,
    title: "عمليات البحث",
  },
  {
    href: "/notifications",
    icon: <BellIcon fontSize="small" />,
    title: "الإشعارات",
  },
  {
    href: "/settings",
    icon: <CogIcon fontSize="small" />,
    title: "إعدادات النظام",
  },
];

export const YEBBSlideBar = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box
          sx={{
            p: 1,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <YEBBLogo
            sx={{
              height: 100,
              width: 100,
            }}
          />
        </Box>
        <Divider
          sx={{
            color: DIVIDER_COLOR,
          }}
        />

        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 2,
            backgroundColor: "white",
          }}
        >
          <Avatar
            sx={{
              cursor: "pointer",
              height: 40,
              width: 40,
              ml: 1,
            }}
            src={"/images/avatar.png"}
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
          {/* TODO -- authenticated user */}
          <Box>
            <Typography> مستخدم النظام</Typography>
            {/* TODO -- authenticated user role */}
            <Typography
              variant="capture"
              sx={{
                fontSize: 10,
                color: "gray",
                fontWeight: 0,
              }}
            >
              Admin Root
            </Typography>
          </Box>
        </Box>

        <Box>
          {items?.map((item) => (
            <YEBBNavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="right"
        open
        PaperProps={{
          sx: {
            // backgroundColor: "neutral.250",
            backgroundColor: SLIDER_BAR_BACKGROUND_COLOR,
            color: "black",
            width: 280,
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {},
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray",
              outline: "1px solid slategrey",
              borderRadius: 6,
            },
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          // backgroundColor: "neutral.900",
          backgroundColor: SLIDER_BAR_BACKGROUND_COLOR,
          color: "black",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

YEBBSlideBar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
