/* eslint-disable */
import SearchIcon from "@mui/icons-material/Search";
import {
  styled,
  Box,
  InputBase,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@mui/material";

const Search = styled("div")({
  marginTop: "10px",
  border: "1px solid black",
  borderRadius: "60px",
  width: "100%",
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    width: "100%",
  },
}));

export default function SearchBar() {
  return (
    <Search>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase fullWidth placeholder="search" />
      </Box>
    </Search>
  );
}
