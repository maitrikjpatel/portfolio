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
              <li className={styles.headerLink}><Link to="/">Work</Link></li>
              <li className={styles.headerLink}><Link to="/notes/">Notes</Link></li>
              {/* <li className={styles.headerLink}><Link to="/photography/">Photography</Link></li> */}
              <li className={styles.headerLink}><Link to="/about/">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
