import React, { useEffect, useState } from 'react'
import { FaMoon,FaSun } from "react-icons/fa";
import './Nav.css'
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../Context/context';
import useLocalStorage from '../../hooks/useLocalStorage';

function Nav() {
  const {darkMode, handleDarkMode} = useGlobalState()
  const navigate = useNavigate()
  const menu = [
    {name:"Inicio", enlace:"/landing", key:1},
    {name:"Nosotros", enlace:"/login", key:2},
    {name:"Tutorial", enlace:"/landing", key:3},
    {name:"Ingresa", enlace:"/signup", key:4}
  ]

  return (
    <nav className='nav-menu-container'>
      <ul className='nav-menu'>
        {menu.map(item => {
          return (
            <li className='nav-menu-item' key={item.key}><a onClick={()=>navigate(item.enlace)}>{item.name}</a></li>
          )
        })}
      </ul>
      <div className='nav-icons' onClick={handleDarkMode}>
        {/* Dark or light mode */}
        <div className='nav-icons-item'>
          {!darkMode ? <FaMoon size={25}  /> : <FaSun size={25} />}
        </div>
      </div>
    </nav>
  )
}

export default Nav