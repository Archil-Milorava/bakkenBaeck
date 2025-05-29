import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavbarMain = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHideNavbar(true);
        setLastScrollY(currentScrollY);
      } else if (currentScrollY < lastScrollY) {
        setHideNavbar(false);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-[9999] h-8 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[25rem] left-4 top-6 bg-white/30 backdrop-blur-md flex items-center justify-around rounded-md transition-transform duration-300 ease-in-out ${
        hideNavbar ? "-translate-y-20" : "translate-y-0"
      }`}
    >
      {/* Logo (BB) */}
      <Link
        to="/"
        className="flex gap-1 cursor-pointer hover:opacity-50 transition-opacity duration-500"
      >
        <span className="font-semibold border-2 rounded-full w-5 h-5 text-sm flex items-center justify-center">
          B
        </span>
        <span className="font-semibold border-2 rounded-full w-5 h-5 text-sm flex items-center justify-center">
          B
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-4 sm:gap-6">
        <Link
          to="/"
          className="text-sm sm:text-md hover:opacity-50 transition-all duration-300"
        >
          Work
        </Link>
        <Link
          to="/"
          className="text-sm sm:text-md hover:opacity-50 transition-all duration-300"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-sm sm:text-md hover:opacity-50 transition-all duration-300"
        >
          Team
        </Link>
        <Link
          to="/"
          className="text-sm sm:text-md hover:opacity-50 transition-all duration-300"
        >
          Journal
        </Link>
        <Link
          to="/"
          className="text-sm sm:text-md hover:opacity-50 transition-all duration-300"
        >
          Clients
        </Link>
      </div>
    </div>
  );
};

export default NavbarMain;
