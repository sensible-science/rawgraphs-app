import React from 'react'
import styles from './Header.module.scss'
import { Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" sticky="top" className={styles.navbar}>
      <Navbar.Brand href="/">
        <b>Front Matter</b>
        <span className="text-primary"> Graphs</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
    </Navbar>
  )
}
