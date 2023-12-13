import React, { useState } from 'react';
import { FiUser, FiBriefcase, FiDollarSign } from 'react-icons/fi';
import { MdOpenInFull } from "react-icons/md";
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen ? (
        <>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#">
                  <FiUser className="icon" />
                  Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <FiBriefcase className="icon" />
                  Accounts
                </a>
              </li>
              <li>
                <a href="#">
                  <FiDollarSign className="icon" />
                  Transactions
                </a>
              </li>
            </ul>
          </nav>
          <button className="close-btn" onClick={toggleSidebar}>
            &times;
          </button>
        </>
      ) : (
        <>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#">
                  <FiUser className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiBriefcase className="icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiDollarSign className="icon" />
                </a>
              </li>
            </ul>
          </nav>
          <button className="open-btn" onClick={toggleSidebar}>
            <MdOpenInFull size={30}/>
          </button>
        </>
      )}
    </aside>
  );
};

export default Sidebar;