import React from 'react'
import { FaMoon,FaSun } from "react-icons/fa";
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate()
  const menu = [
    {name:"Inicio", enlace:"/landing", key:1},
    {name:"Nosotros", enlace:"/login", key:2},
    {name:"Tutorial", enlace:"/landing", key:3},
    {name:"Ingresa", enlace:"/signup", key:4},
  ]

  
  //Cuando este el contexto
  // const [darkMode, setDarkMode] = useState(false);
  
  // function handleDarkMode() {
  //   setDarkMode(prevDarkMode => {
  //     document.getElementById('root').classList.add(!prevDarkMode ? 'dark-mode' : 'light-mode');
  //     document.getElementById('root').classList.remove(!prevDarkMode ? 'light-mode' : 'dark-mode');
  //     return !prevDarkMode;
  //   });
  // }

  return (
    <nav className='nav-menu-container'>
      <ul className='nav-menu'>
        {menu.map(item => {
          return (
            <li className='nav-menu-item' key={item.key}><a onClick={()=>navigate(item.enlace)}>{item.name}</a></li>
          )
        })}
      </ul>
      <div className='nav-icons'>
        {/* Dark or light mode */}
        {/* darkMode ? <FaMoon onClick={handleDarkMode} /> : <FaSun onClick={handleDarkMode}/>*/}
        <FaMoon size={25}/>
      </div>
    </nav>
  )
}

export default Nav