import React from "react";
import Footer from "./footer";
import Usernavbar from "./Mainnavbar";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function AskQuestion({ placeholder, data }) {
  return (
    <>
      <Usernavbar />

      <div className="search">
        <div className="searchInputs">
          <div className="text" placeholder={placeholder}></div>
          <input type="text" />
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
