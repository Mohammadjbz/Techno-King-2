import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useState } from "react";
import ProductSearch from "../../features/search/components/ProductSearch";
import LoginRegisterForm from "../../features/auth/components/LoginRegisterForm";

function AppLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const openSearch = () => {
    setIsAuthOpen(false);
    setIsSearchOpen(true);
  };

  const openAuth = () => {
    setIsSearchOpen(false);
    setIsAuthOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onSearchClick={openSearch}
        onLoginClick={openAuth}
        isSearchOpen={isSearchOpen}
      />

      {isSearchOpen && <ProductSearch onClose={() => setIsSearchOpen(false)} />}
      {isAuthOpen && <LoginRegisterForm onClose={() => setIsAuthOpen(false)} />}

      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;