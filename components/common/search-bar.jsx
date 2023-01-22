import {
  Box,
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "../../icons/search";
export const SearchBar = (props) => {
  const { value, onChange, onSearch, title, placeholder } = props;

  return (
    <Box
      sx={{
        maxWidth: 530,
        minWidth: 450,
      }}
    >
      <TextField
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={onSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
