import searchIcon from "/icons/search-normal.svg";
import bagIcon from "/icons/bag.svg";
import userIcon from "/icons/user.svg";
import { NavLink } from "react-router-dom";

interface HeaderIconsProps {
  onSearchClick?: () => void;
  onLoginClick: () => void;
  onUserClick: () => void;
  isLoggedIn: boolean;
}

const HeaderIcons = ({
  onSearchClick,
  onLoginClick,
  onUserClick,
  isLoggedIn,
}: HeaderIconsProps) => {
  return (
    <div className="flex items-center gap-[0.5rem]">
      {onSearchClick && (
        <button type="button" onClick={onSearchClick} aria-label="Search" className="hidden md:block">
          <img src={searchIcon} alt="" className="w-[1.5rem]" />
        </button>
      )}

      <NavLink to="/cart" aria-label="Cart">
        <img src={bagIcon} alt="" className="w-[1.5rem]" />
      </NavLink>

      {isLoggedIn ? (
        <button
          type="button"
          onClick={onUserClick}
          aria-label="User menu"
          data-user-trigger
        >
          <img src={userIcon} alt="" className="w-[1.5rem]" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onLoginClick}
          className="rounded-[0.5rem] bg-primary-300 px-2 py-1.5 text-xs font-medium text-white hover:bg-primary-400 md:px-4 md:py-2 md:text-base"
        >
          Login / Sign Up
        </button>
      )}
    </div>
  );
};

export default HeaderIcons;