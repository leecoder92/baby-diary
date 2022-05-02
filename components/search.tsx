/* eslint-disable */
import SearchIcon from "@mui/icons-material/Search";
import { styled, Box, InputBase } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

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

const SearchIconWrapper = styled("div")(({ theme }) => ({
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
  const handleSearchValue = (e: any) => {
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
        axios({
          method: "get",
          url: "/api/diary",
        }).then((res) => {
          props.setDiaries(res.data);
        });
      } else {
        props.setDiaries(filterDiary);
        props.setPage(10);
      }
    }, 1000);
    return () => clearTimeout(searchDiary);
  }, [searchValue]);

  return (
    <Search>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput
          onChange={handleSearchValue}
          fullWidth
          placeholder="search"
        />
      </Box>
    </Search>
  );
}
