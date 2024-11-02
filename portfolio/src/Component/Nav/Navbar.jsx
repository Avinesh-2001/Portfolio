import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Home, User, FolderOpen, Mail } from "lucide-react";
import logo from "./../../Image/computer.webp";
import "./../css/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;
        const isProfilePage = location.pathname === "/profile" || location.pathname === "/";
        setShowSideNavbar(isProfilePage && aboutSectionTop < window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  const NavItem = ({ to, label }) => {
    const scrollOptions = { smooth: true, duration: 500, offset: -70 };

    if (location.pathname === "/" || location.pathname === "/profile") {
      return (
        <ScrollLink to={to} {...scrollOptions} className="nav-link">
          {label}
        </ScrollLink>
      );
    }
    return (
      <RouterLink to={`/${to}`} className="nav-link">
        {label}
      </RouterLink>
    );
  };

  return (
    <>
      <nav className={`navbar ${showSideNavbar ? "hidden" : ""}`}>
        <div className="navbar-logo">
          <img className="nav-image" src={logo} alt="Logo" />
        </div>
        <div className="navbar-links">
          <NavItem to="profile" label="Home" />
          <NavItem to="about" label="About" />
          <NavItem to="project" label="Projects" />
          <NavItem to="contact" label="Contact" />
        </div>
      </nav>

      {showSideNavbar && (
        <div className="side-navbar">
          {[
            { label: "Profile", icon: <Home size={20} />, path: "/profile" },
            { label: "About", icon: <User size={20} />, path: "/about" },
            { label: "Projects", icon: <FolderOpen size={20} />, path: "/project" },
            { label: "Contact", icon: <Mail size={20} />, path: "/contact" },
          ].map(({ label, icon, path }) => (
            <div
              className="nav-icon"
              key={label}
              onMouseEnter={() => setHoveredIcon(label)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <RouterLink to={path}>{icon}</RouterLink>
              <span className={`nav-label ${hoveredIcon === label ? "show" : ""}`}>{label}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
