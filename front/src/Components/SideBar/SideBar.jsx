import React, { useState } from 'react';
import { FiUser, FiBriefcase, FiDollarSign } from 'react-icons/fi';
import { MdOpenInFull, MdOutlineClose  } from "react-icons/md";
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
           <button className="side-btn close-btn" onClick={toggleSidebar}>
            <MdOutlineClose size={30}/>
          </button>
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
        </>
      ) : (
        <>
          <button className="side-btn open-btn" onClick={toggleSidebar}>
            <MdOpenInFull size={30}/>
          </button>
          <nav className="sidebar-nav sidebar-nav-closed">
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
        </>
      )}
    </aside>
  );
};

export default Sidebar;