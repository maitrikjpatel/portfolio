import React from 'react'

import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

class Header extends React.Component {
  render() {
    return (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MPCom</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <Link style={{ marginRight: `15px` }} to="/">Home</Link>
          <Link style={{ marginRight: `15px` }} to="/">Notes</Link>
          <Link style={{ marginRight: `15px` }} to="/">Pics</Link>
          <Link to="/about/">About</Link>
        </ul>
      </header> 
    )
  }
}

export default Header
