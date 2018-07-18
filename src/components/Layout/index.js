import '../../utils/css/base.css';

import React from 'react'
import Header  from '../Header/'
import Footer  from '../Footer/'

import { rhythm, scale } from '../../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div>
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
