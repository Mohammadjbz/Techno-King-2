import MobileSearchTrigger from "../../../features/search/components/MobileSearchTrigger";
import HeaderIcons from "../HeaderIcons";
import HeaderNav from "../HeaderNav";
import Logo from "../Logo";
import hamburger from "/icons/menu.svg";
// import ProductsMegaMenu from "../../../features/products/components/ProductsMegaMenu";

interface HeaderProps {
  onSearchClick: () => void;
  onLoginClick: () => void;
  isSearchOpen: boolean;
}

const Header = ({ onSearchClick, onLoginClick, isSearchOpen }: HeaderProps) => {
  return (
    <>
      <header className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-[6.8rem]">
        <div className="hidden h-[5.7rem] grid-cols-[1fr_auto_1fr] items-center md:grid">
          <div className="flex justify-start">
            <Logo />
          </div>

          <div className="flex justify-center">
            <HeaderNav />
          </div>

          <div className="flex justify-end">
            <HeaderIcons
              onSearchClick={onSearchClick}
              onLoginClick={onLoginClick}
            />
          </div>
        </div>

        <div className="grid h-16 grid-cols-3 items-center md:hidden">
          <div className="flex justify-start">
            <img src={hamburger} alt="menu" className="h-6 w-6" />
          </div>

          <div className="flex justify-center">
            <span className="text-primary-400 text-[1.2rem] font-semibold">
              TECHNO KING
            </span>
          </div>

          <div className="flex justify-end">
            <HeaderIcons onLoginClick={onLoginClick} />
          </div>
        </div>

        {!isSearchOpen && (
          <div className="pb-3 md:hidden">
            <MobileSearchTrigger onClick={onSearchClick} />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
