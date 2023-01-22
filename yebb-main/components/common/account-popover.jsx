import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import NextLink from "next/link";

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const handleSignOut = () => {
    //TODO signout logic
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">معلومات الحساب</Typography>

        <Typography color="text.secondary" variant="body2">
          {/* TODO -- use context to handle authentication login  */}
          {"مدير النظام"}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem onClick={handleSignOut}> تسجيل الخروج</MenuItem>
      </MenuList>
    </Popover>
  );
};
