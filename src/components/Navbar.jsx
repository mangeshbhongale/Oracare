import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-transparent absolute top-0 left-0 right-0 z-50 h-20 p-4 md:p-8 lg:p-16 flex items-center justify-between">
      <div className="flex justify-center items-center w-auto">
        <img
          src="images/oracare-full.png"
          alt=""
          className="h-16 md:h-24 lg:h-32"
        />
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        {/* SVG for Hamburger Menu */}
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <ul
        className={`md:flex flex-col md:flex-row w-full md:w-auto absolute md:relative bg-white md:bg-transparent top-full left-0 md:left-auto ${
          isMenuOpen ? "flex" : "hidden"
        } justify-center md:justify-end gap-8 md:gap-14 items-center text-center pb-8`}
      >
        {/* Navigation Items */}
        <li>
          <Link
            className="nav-items cursor-pointer"
            to="home" // ID of the target element
            spy={true} // Enable active class when scrolling
            smooth={true} // Smooth scrolling
            duration={800} // Scroll duration in milliseconds
            activeClass="active" // Class name for the active link
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="cursor-pointer nav-items"
            to="about" // ID of the target element
            spy={true} // Enable active class when scrolling
            smooth={true} // Smooth scrolling
            duration={800} // Scroll duration in milliseconds
            activeClass="active" // Class name for the active link
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-items cursor-pointer"
            to="services" // ID of the target element
            spy={true} // Enable active class when scrolling
            smooth={true} // Smooth scrolling
            duration={800} // Scroll duration in milliseconds
            activeClass="active" // Class name for the active link
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="nav-items cursor-pointer"
            to="ourteam" // ID of the target element
            spy={true} // Enable active class when scrolling
            smooth={true} // Smooth scrolling
            duration={800} // Scroll duration in milliseconds
            activeClass="active" // Class name for the active link
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            className="nav-items cursor-pointer"
            to="testimonials" // ID of the target element
            spy={true} // Enable active class when scrolling
            smooth={true} // Smooth scrolling
            duration={800} // Scroll duration in milliseconds
            activeClass="active" // Class name for the active link
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            Testimonials
          </Link>
        </li>

        <li>
          <Link
            className="nav-items cursor-pointer"
            to="contact" // ID of the target element
            spy={true} // Enable active class when scrolling
            smooth={true} // Smooth scrolling
            duration={800} // Scroll duration in milliseconds
            activeClass="active" // Class name for the active link
            onClick={toggleMenu} // Close the menu when a link is clicked
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
