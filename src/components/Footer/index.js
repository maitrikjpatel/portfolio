import React from 'react'

import { Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

class Footer extends React.Component {
  render() {
    return (
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
  }
}

export default Footer
