import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

import NavbarLinks from '@/layouts/components/Navbar/NavbarLinks'

const mobileSidebarToggle = (e) => {
  e.preventDefault()
  document.body.classList.toggle("nav-open")
}

const Header = (props) => {
  return (
    <nav className="navbar-default navbar navbar-expand-lg navbar-light">
      <Navbar.Brand>{props.brandText}</Navbar.Brand>
      <Navbar.Toggle onClick={mobileSidebarToggle} />
      <Navbar.Collapse>
        <NavbarLinks />
      </Navbar.Collapse>
    </nav>
  )
}

export default Header
