import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Nav.module.css'
const Nav = () => {
  const navLinkShow = ({isAuth = false}) => isAuth ? s.navLink : s.login ;
  return (
    <div className={s.container}>
      <nav className={s.navStyle}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/authors'}>Psychologists</NavLink>
        <NavLink to={'/psychologists'} className={navLinkShow}>Favorites</NavLink>
      </nav>
    </div>
  )
}

export default Nav
