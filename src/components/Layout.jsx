import { Outlet, NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import "../style/Layout.css";

function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="header">

        {/* codeops Logo */}
        <div className="logo">
          <NavLink to="/">
            <img src="/CodeOps_bgRemoved.png" alt="CodeOps Logo" />
          </NavLink>
        </div>

        <nav className="nav desktop-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* hamburger icon */}
        <div 
          className="hamburger" 
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className={openMenu ? "bar bar1-open" : "bar"}></div>
          <div className={openMenu ? "bar bar2-open" : "bar"}></div>
          <div className={openMenu ? "bar bar3-open" : "bar"}></div>
        </div>

      </header>

      {/* menu in mobile */}
      <nav className={openMenu ? "mobile-nav open" : "mobile-nav"}>
        <NavLink onClick={() => setOpenMenu(false)} to="/" end>Home</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} to="/about">About</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} to="/careers">Careers</NavLink>
        <NavLink onClick={() => setOpenMenu(false)} to="/contact">Contact</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
