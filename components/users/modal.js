import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  IconButton,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function IconClosTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            float: "left",
            right: 8,
            top: -7,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const modal = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        اضافة مستخدم
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <IconClosTitle id="customized-dialog-title" onClose={handleClose}>
          اضافة مستخدم
        </IconClosTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              type="text"
              name=""
              fullWidth="fullWidth"
              placeholder="الاسم"
            />
            <TextField
              type="email"
              name=""
              fullWidth="fullWidth"
              placeholder="البريد الاكتروني"
              sx={{ marginTop: 2, marginBottom: 2 }}
            />
            <TextField
              type="password"
              fullWidth="fullWidth"
              placeholder="كلمة السر"
              sx={{ marginBottom: 5 }}
            />
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                name=""
                value="female"
                control={<Radio />}
                label="صلاحيات ادمن"
              />
              <FormControlLabel
                name=""
                value="male"
                control={<Radio />}
                label="صلاحيات مستخدم"
              />
            </RadioGroup>
          </Box>
        </DialogContent>

        <DialogActions sx={{ flexDirection: "row-reverse", m: 3 }}>
          <Button variant="contained" color="error" onClick={handleClose}>
            اضافة
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default modal;
