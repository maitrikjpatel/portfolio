import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const footer = (
      <footer>
        <ul style={{ listStyle: `none`, textAlign: `center` }}>
          <a href="" style={{ marginRight: `15px` }}>Dribble</a>
          <a href="" style={{ marginRight: `15px` }}>Twitter</a>
          <a href="" style={{ marginRight: `15px` }}>Linkedin</a>
          <a href="" style={{ marginRight: `15px` }}>Github</a>
          <a href="">Instagram</a>
        </ul>    
      </footer>
    )
    const header = (
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MPCom</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <Link style={{ marginRight: `15px` }} to="/">Home</Link>
          <Link to="/about/">About</Link>
        </ul>
      </header>
    )

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        <br />
        {children}
        <br />
        {footer}
      </div>
    )
  }
}

export default Template
