import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'
const Nav = () => {
  const navLinkShow = ({isActive}) => isActive ? s.login : s.navLink;
  return (
    <div>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/authors'}>Psychologists</NavLink>
        <NavLink to={'/psychologists'} className={navLinkShow}>Favorites</NavLink>
      </nav>
    </div>
  )
}

export default Nav
