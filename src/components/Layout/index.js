import React from 'react'
import Header  from '../Header/'
import Footer  from '../Footer/'

import { rhythm, scale } from '../../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header />
        <br />
        {children}
        <br />
        <Footer />
      </div>
    )
  }
}

export default Template
