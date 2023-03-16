import "./header.css";
import { FcReddit } from "react-icons/fc";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <FcReddit className="logo-icon" />
        <p>Reddit Minimal</p>
      </div>
    </header>
  );
};

export default Header;
