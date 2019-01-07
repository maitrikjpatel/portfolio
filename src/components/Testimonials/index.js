import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tags.module.css'

function Tags(props) {
  const { text, ...restProps } = props

  return <div className={styles.Tags}>{text}</div>
}

Tags.propTypes = {
  text: PropTypes.string,
}

Tags.defaultProps = {
  text: null,
}

export default Tags
