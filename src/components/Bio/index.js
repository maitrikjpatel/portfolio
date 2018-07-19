import React from 'react'
import styles from './Bio.module.css'

function Bio(props) {
  const {
    ...restProps
  } = props

  return (
    <div className={styles.Bio}>
      <h1 className={styles.H1Title}>
        Hey! I am Maitrik Patel. I design and develop pixel perfect user interfaces and experiences. 
      </h1>
      <div className={styles.vertcialLine}></div>
      <h5> Here's some of my selected projects</h5>
    </div>
  )
}

export default Bio
