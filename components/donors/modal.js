import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  IconButton,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
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
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeGovernorate = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" color="error" onClick={handleClickOpen}>
        اضافة متبرع
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <IconClosTitle id="customized-dialog-title" onClose={handleClose}>
          اضافة متبرع
        </IconClosTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off">
            <TextField type="text" fullWidth="fullWidth" placeholder="الاسم" />
            <TextField
              name=""
              type="text"
              fullWidth="fullWidth"
              placeholder="فصيلة الدم"
              sx={{ marginTop: 2, marginBottom: 2 }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">المحافظة</InputLabel>
              <Select
                name=""
                id="demo-simple-select"
                value={age}
                onChange={handleChangeGovernorate}
              >
                <MenuItem value={10}>تعز</MenuItem>
                <MenuItem value={20}>صنعاء</MenuItem>
                <MenuItem value={30}>اب</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="text"
              name=""
              fullWidth="fullWidth"
              placeholder="اسم المديرية"
              sx={{ marginTop: 2, marginBottom: 2 }}
            />
            <TextField
              name=""
              type="text"
              fullWidth="fullWidth"
              placeholder="المنطقة"
            />
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
