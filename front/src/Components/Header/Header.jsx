import React from 'react'
import './Header.css'
import {FaGooglePlay, FaApple} from 'react-icons/fa'
import Nav from './Nav'
import SwitchButton from '../Buttons/SwitchButton'

function Header() {
  return (
    <header>
      <div className='header-title'>
        <h1 className='header-title-h1'>FinanzApp <span className='header-title-span'>Educa</span></h1>
        <div className='header-buttons'>
          <SwitchButton/>
          <ul className='header-icons'>
            <li><a href="#" target="_blank"><FaGooglePlay size={20}/></a></li>
            <li><FaApple size={25}/></li>
          </ul>
        </div>
      </div>
      <Nav/>
    </header>
  )
}

export default Header