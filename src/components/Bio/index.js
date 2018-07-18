import React from 'react'
import styles from './Bio.module.css'

class Bio extends React.Component {
  render() {
    return (
      <div className={styles.Bio}>
        <h1>
          Hey! I am Maitrik Patel. I design and develop pixel perfect user interfaces and experiences. 
        </h1>
        <div className={styles.vertcialLine}></div>
        <h5> Here's some of my selected projects</h5>
      </div>
    )
  }
}

export default Bio
