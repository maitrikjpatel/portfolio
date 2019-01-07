import React from 'react'
import styles from './Header.module.css'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={styles.header}>
          <Link to="/" className={styles.headerLogo}>
            m
          </Link>
          <nav>
            <ul className={styles.headerLinks}>
              <Link className={styles.headerLink} to="/">
                Work
              </Link>
              <Link className={styles.headerLink} to="/notes/">
                Notes
              </Link>
              <Link className={styles.headerLink} to="/photography/">
                Photography
              </Link>
              <Link className={styles.headerLink} to="/about/">
                About
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
