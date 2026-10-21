import searchIcon from "/icons/search-normal.svg";
import bagIcon from "/icons/bag.svg";
import userIcon from "/icons/user.svg";
import { NavLink } from "react-router-dom";

interface HeaderIconsProps {
  onSearchClick?: () => void;
  onLoginClick: () => void;
}

const HeaderIcons = ({ onSearchClick, onLoginClick }: HeaderIconsProps) => {
  return (
    <div className="flex gap-[0.5rem]">
      {onSearchClick && (
        <button
          type="button"
          onClick={onSearchClick}
          aria-label="Search"
          className="hidden md:block"
        >
          <img src={searchIcon} alt="" className="w-[1.5rem]" />
        </button>
      )}

      <NavLink to="/cart" aria-label="Cart">
        <img src={bagIcon} alt="" className="w-[1.5rem]" />
      </NavLink>

      <button type="button" onClick={onLoginClick} aria-label="Login">
        <img src={userIcon} alt="" className="w-[1.5rem]" />
      </button>
    </div>
  );
};

export default HeaderIcons;