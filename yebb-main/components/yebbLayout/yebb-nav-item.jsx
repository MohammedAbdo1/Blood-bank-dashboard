import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, ListItem, Typography } from "@mui/material";
import {
  PRIMARY_COLOR,
  SLIDER_BAR_ITEM_COLOR,
  SLIDER_BAR_ITEM_HOVER_BACKGROUND_COLOR,
  SLIDER_BAR_ITEM_HOVER_COLOR,
  SLIDER_BAR_ITEM_hOver_BACKGROUND_COLOR,
  SLIDE_BAR_ITEM_ACTIVE_BACKGROUND,
  SLIDE_BAR_ITEM_HOVER_COLOR,
  SLIDE_ITEM_HOVER_COLOR,
} from "../../constant";

export const YEBBNavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const router = useRouter();
  const active = href ? router.pathname === href : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0.5,
        px: 1,
        // backgroundColor: "green",
      }}
      {...others}
    >
      <NextLink
        href={href}
        passHref
        style={{
          width: "100%",
          textDecoration: "none",
        }}
      >
        <Button
          component="a"
          endIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && SLIDE_BAR_ITEM_ACTIVE_BACKGROUND,
            borderRadius: 1,
            width: "270px",
            color: active ? SLIDER_BAR_ITEM_HOVER_COLOR : SLIDER_BAR_ITEM_COLOR,

            width: "100%",
            "&:hover": {
              backgroundColor: SLIDER_BAR_ITEM_HOVER_BACKGROUND_COLOR,
              color: SLIDE_BAR_ITEM_HOVER_COLOR,
            },
          }}
        >
          <Box sx={{ flexGrow: 1, width: "100%" }}>
            <Typography
              sx={{
                textAlign: "right",
              }}
            >
              {title}
            </Typography>
          </Box>
        </Button>
      </NextLink>
    </ListItem>
  );
};

YEBBNavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string,
};
