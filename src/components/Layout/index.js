import '../../utils/css/base.css'
import styles from './Layout.module.css'

import React from 'react'
import Header from '../Header/'
import Footer from '../Footer/'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <React.Fragment>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Template
