import React from 'react'
import styles from './BroswerFrame.module.css'
import PropTypes from 'prop-types'

function BroswerFrame(props) {
  const { children, ...restProps } = props

  return <div className={styles.BroswerFrame}>{children}</div>
}

BroswerFrame.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BroswerFrame
