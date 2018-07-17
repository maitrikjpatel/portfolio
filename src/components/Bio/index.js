import React from 'react'

import { rhythm } from '../../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          <strong>Hey! I am Maitrik Patel.</strong>
          A Front-End Developer / UX Designer Who Designs and Develops Pixel Perfect Interface Designs, Interfaces and Experiences.
          <a href="https://twitter.com/maitrikjpate">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
