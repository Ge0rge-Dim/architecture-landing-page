import { useState } from "react";
import logoDark from "../assets/icons/logo-dark.svg";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex w-full max-container">
      <nav className="flex justify-between items-center w-full px-6 py-4">
        <div>
          <a href="">
            <img
              src={logoDark}
              alt="Edgingtons architects logo"
              className="w-56"
            />
          </a>
        </div>
        <div className="flex items-center relative">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className={`fixed inset-0 bg-secondary-dark-600 max-md:text-slate-50 flex flex-col items-center justify-center h-screen z-10 md:relative md:bg-transparent md:flex-row md:items-center md:h-auto md:z-auto ${
                  isMenuOpen ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col items-center justify-center h-full md:h-auto md:flex-row">
                  {navLinks.map((link) => (
                    <li key={link.href} className="my-4 md:my-0 md:mx-2">
                      <button onClick={closeMenu}>
                        <a
                          href={link.href}
                          onClick={closeMenu}
                          className="text-lg font-karla max-md:text-3xl hover:text-primary-green-600 transition-all duration-300 ease-in-out"
                        >
                          {link.label}
                        </a>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={toggleMenu}
            className="ml-8 focus:outline-none relative w-8 h-8 z-20"
          >
            <span
              className={`block absolute h-[2px] w-full rounded-full bg-secondary-dark-600 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 top-3.5 max-sm:bg-slate-50" : "top-2"
              }`}
            />
            <span
              className={`block absolute h-[2px] w-full rounded-full bg-secondary-dark-600 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block absolute h-[2px] w-full rounded-full bg-secondary-dark-600 transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 top-3.5 max-sm:bg-slate-50" : "top-4"
              }`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
