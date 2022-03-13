import React, { Component } from 'react'
import { Nav, NavDropdown, Image } from 'react-bootstrap'

const NavbarLinks = () => {
  return (
    <>
      <Nav className="mr-auto navbar-nav">
        <Nav.Link href="#">
          <i className="fa fa-dashboard" />
        </Nav.Link>
        <Nav.Link href="#">
          <i className="fa fa-search" />
          <p className="d-lg-none d-md-none">Search</p>
        </Nav.Link>
      </Nav>
    </>
  )
}

export default NavbarLinks
