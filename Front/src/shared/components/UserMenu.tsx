import orderIcon from "/icons/bag.svg";
import favoriteIcon from "/icons/heart.svg";
import bagIcon from "/icons/bag-2.svg";
import userIcon from "/icons/profile-circle.svg";
import logoutIcon from "/icons/logout.svg";
import { NavLink } from "react-router-dom";

interface UserMenuProps {
  onClose: () => void;
  onLogout: () => void;
}

const items = [
  { to: "/user/orders", icon: orderIcon, label: "Orders" },
  { to: "/user/favorites", icon: favoriteIcon, label: "Wish List" },
  { to: "/user/payment", icon: bagIcon, label: "Payments" },
];

const UserMenu = ({ onClose, onLogout }: UserMenuProps) => {
  return (
    <div className="absolute top-full z-50 rounded-b-md bg-white p-4 right-4 md:right-8 lg:right-[6.8rem]">
      <NavLink
        to="/user/personal"
        onClick={onClose}
        className="flex gap-4 mb-6"
      >
        <img src={userIcon} alt="" />
        <div className="flex flex-col">
          <span className="text-primary-300">Jimmy Smith</span>
          <span className="text-xs">Jimmy.smith1996@gmail.com</span>
        </div>
      </NavLink>

      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} onClick={onClose} className="flex gap-4">
              <img src={item.icon} alt="" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <button type="button" onClick={onLogout} className="flex gap-4">
            <img src={logoutIcon} alt="" />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
