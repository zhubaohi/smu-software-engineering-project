/**
 * Layout Component
 *
 * This component sets up the layout for the application, including navigation,
 * dark mode toggle, and a scroll-to-top button. It adjusts its styling dynamically
 * based on the dark mode state using the `DarkModeContext`.
 *
 * @fileoverview The main layout component for the application with navigation,
 * dark mode toggle, and scroll behavior.
 * @author Md Golam Fardin
 */

// Import necessary components from "react-router-dom" for routing
import { Outlet, Link, useLocation } from "react-router-dom";

// Import React hooks for managing state and side-effects
import { useState, useEffect, useContext } from "react";

// Import icons from "react-icons" for the scroll-to-top and dark mode buttons
import { FaArrowUpLong } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";

// Import DarkModeContext to access the dark mode state and toggle function
import { DarkModeContext } from "../DarkModeContext";

// Define the Layout component as a functional component
export default function Layout() {
  // Local state for mobile navigation and active tab
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Access dark mode state and toggle function from the context
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Change background color based on dark mode
  darkMode
    ? (document.querySelector("body").style.backgroundColor = "#111827")
    : (document.querySelector("body").style.backgroundColor = "#e7edf0");

  // Handle tab click to update the active tab state
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show or hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 580) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full">
      {/* Container for the navigation and main content */}
      <nav
        className={`flex w-full ${
          darkMode ? "bg-[#1F2937]" : "bg-navbarBg"
        } transition-colors duration-300`}
      >
        {/* Main title link */}
        <h2 className="font-nunito text-titleClr text-2xl lg:text-4xl font-bold pl-6 lg:pl-32 w-full pt-6 pb-3">
          <Link to="/" onClick={() => handleTabClick("/")}>
            Woodland Conservation
          </Link>
        </h2>

        {/* Mobile menu section */}
        <section className="MOBILE-MENU flex lg:hidden flex justify-center">
          {/* Hamburger icon for toggling mobile menu */}
          <div
            className="HAMBURGER-ICON space-y-2 pt-7 px-5"
            onClick={() => setIsNavOpen((prev) => !prev)} // Toggle menu visibility
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          {/* Conditional rendering of mobile menu */}
          <div
            className={
              isNavOpen
                ? `${darkMode ? "bg-[#1F2937]" : "bg-[#0A3981]"} showMenuNav`
                : "hideMenuNav"
            }
          >
            {/* Close icon for mobile menu */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-4 py-4"
              onClick={() => setIsNavOpen(false)} // Close the menu when clicked
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                />
              </svg>
            </div>

            {/* Mobile menu links */}
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col basis-3/5 space-y-5 text-xl">
              <li>
                <Link
                  to="/about"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/about"
                      ? `${
                          darkMode
                            ? "highlight-dark font-bold"
                            : "highlight font-bold"
                        }`
                      : ""
                  }`}
                  onClick={() => handleTabClick("/about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/ecosystem"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/ecosystem"
                      ? `${
                          darkMode
                            ? "highlight-dark font-bold"
                            : "highlight font-bold"
                        }`
                      : ""
                  }`}
                  onClick={() => handleTabClick("/ecosystem")}
                >
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/gallery"
                      ? `${
                          darkMode
                            ? "highlight-dark font-bold"
                            : "highlight font-bold"
                        }`
                      : ""
                  }`}
                  onClick={() => handleTabClick("/gallery")}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/sitemap"
                      ? `${
                          darkMode
                            ? "highlight-dark font-bold"
                            : "highlight font-bold"
                        }`
                      : ""
                  }`}
                  onClick={() => handleTabClick("/sitemap")}
                >
                  Site Map
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/contact"
                      ? `${
                          darkMode
                            ? "highlight-dark font-bold"
                            : "highlight font-bold"
                        }`
                      : ""
                  }`}
                  onClick={() => handleTabClick("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Desktop menu section */}
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex justify-end pt-9 pb-3 pr-32 w-full">
          <li>
            <Link
              to="/about"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/about"
                  ? `${
                      darkMode
                        ? "highlight-dark font-bold"
                        : "highlight font-bold"
                    }`
                  : ""
              }`}
              onClick={() => handleTabClick("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/ecosystem"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/ecosystem"
                  ? `${
                      darkMode
                        ? "highlight-dark font-bold"
                        : "highlight font-bold"
                    }`
                  : ""
              }`}
              onClick={() => handleTabClick("/ecosystem")}
            >
              Ecosystem
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/gallery"
                  ? `${
                      darkMode
                        ? "highlight-dark font-bold"
                        : "highlight font-bold"
                    }`
                  : ""
              }`}
              onClick={() => handleTabClick("/gallery")}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/sitemap"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/sitemap"
                  ? `${
                      darkMode
                        ? "highlight-dark font-bold"
                        : "highlight font-bold"
                    }`
                  : ""
              }`}
              onClick={() => handleTabClick("/sitemap")}
            >
              Site Map
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/contact"
                  ? `${
                      darkMode
                        ? "highlight-dark font-bold"
                        : "highlight font-bold"
                    }`
                  : ""
              }`}
              onClick={() => handleTabClick("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Main content of the current route */}
      <div className="">
        <Outlet /> {/* Placeholder for the child route components */}
      </div>
      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 lg:bottom-20 right-3 lg:right-4 z-[70] bg-gray-600 text-white text-3xl px-2 lg:px-3 py-2 lg:py-3 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <FaArrowUpLong />
        </button>
      )}

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className={`fixed shadow-md bottom-3 lg:bottom-4 right-3 lg:right-4 z-[70] text-yellow-400 text-3xl px-2 lg:px-3 py-2 lg:py-3 rounded-full ${
          darkMode
            ? "bg-white hover:bg-gray-200"
            : "bg-gray-800 hover:bg-gray-700"
        } transition-bg duration-300`}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}
