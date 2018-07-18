import React from 'react'
import styles from "./Header.module.css"
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className="layoutContainer">
          <Link to="/" className={styles.headerLogo}>m</Link>
          <ul className={styles.headerLinks}>
            <Link className={styles.headerLink} to="/">work</Link>
            <Link className={styles.headerLink} to="/notes/">notes</Link>
            <Link className={styles.headerLink} to="/photos/">photos</Link>
            <Link className={styles.headerLink} to="/about/">about</Link>
          </ul>
        </div>
      </header> 
    )
  }
}

export default Header
