import SearchIcon from "@mui/icons-material/Search";
import { styled, Box, InputBase, IconButton } from "@mui/material";
import { useEffect, useState, ChangeEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Search = styled("div")({
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "60px",
  width: "100%",
  marginTop: "10px",
  position: "sticky",
  top: "10px",
  zIndex: 1,
});

const IconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    width: "100%",
  },
}));

export default function SearchBar(props: any) {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    const searchDiary = setTimeout(() => {
      const filterDiary = props.original.filter((diary: any) => {
        if (
          diary.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          diary.contents.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return diary;
        }
      });
      if (!searchValue) {
        props.setDiaries(props.original);
      } else {
        props.setDiaries(filterDiary);
        props.setPage(10);
      }
    }, 1000);
    return () => clearTimeout(searchDiary);
  }, [props, searchValue]);

  const handleDelete = () => {
    setSearchValue("");
  };

  return (
    <Search>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <SearchInput
          onChange={handleSearchValue}
          fullWidth
          placeholder="search"
          value={searchValue}
        />
        <IconButton
          sx={{
            cursor: "pointer",
            visibility: searchValue ? "visible" : "hidden",
          }}
          onClick={handleDelete}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Search>
  );
}
