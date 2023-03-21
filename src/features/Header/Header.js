import React, { useState, useEffect } from "react";
import "./Header.css";
import { FcReddit } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/redditSlice";

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState("");
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <header>
      <div className="logo">
        <FcReddit className="logo-icon" />
        <p>Reddit Minimal</p>
        <form className="search" onSubmit={onSearchTermSubmit}>
          <input
            type="text"
            value={searchTermLocal}
            onChange={onSearchTermChange}
            placeholder="Search Reddit"
          />
          <button type="submit" onClick={onSearchTermSubmit}></button>
          <FaSearch />
        </form>
      </div>
    </header>
  );
};

export default Header;
