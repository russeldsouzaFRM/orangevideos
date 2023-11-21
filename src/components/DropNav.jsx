import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClickOutside = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div>
      <button onClick={handleDropdownToggle}>Menu</button>
      <motion.div
        ref={dropdownRef}
        className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}
        animate={{
          height: isDropdownOpen ? "auto" : 0,
          transition: {
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        // onClickOutside={handleDropdownClickOutside}
      >
        <ul className="dropdown-menu-list">
          <li className="dropdown-menu-item">
            <a href="/">Option 1</a>
          </li>
          <li className="dropdown-menu-item">
            <a href="/">Option 2</a>
          </li>
          <li className="dropdown-menu-item">
            <a href="/">Option 3</a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
