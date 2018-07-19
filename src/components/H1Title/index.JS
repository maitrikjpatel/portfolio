import React from 'react'
import styles from "./H1Title.module.css"
import PropTypes from 'prop-types'

function H1Title(props) {
  const {
    text,
    ...restProps
  } = props

  return (
    <h1 className={styles.H1Title}>
      {text}
    </h1>
  )
}

H1Title.propTypes = {
  text: PropTypes.string.isRequired,
}

export default H1Title
