import React from 'react'
import styles from "./PageTitle.module.css"
import PropTypes from 'prop-types'

function PageTitle(props) {
  const {
    text,
    ...restProps
  } = props

  return (
    <h1 className={styles.PageTitle}>
      {text}
    </h1>
  )
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
}

export default PageTitle
