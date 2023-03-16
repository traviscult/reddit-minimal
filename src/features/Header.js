import "./header.css";
import { FcReddit } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FcReddit className="logo-icon" />
        <p>Reddit Minimal</p>
        <form className="search">
          <input type="text" placeholder="Search Reddit" />
          <button type="submit"></button>
          <FaSearch />
        </form>
      </div>
    </header>
  );
};

export default Header;
