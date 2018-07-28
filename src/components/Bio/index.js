import React from 'react'
import PropTypes from 'prop-types'
import styles from './Bio.module.css'

function Bio(props) {
  const {
  title,
  description,
  ...restProps
  } = props

  return (
    <div className={styles.Bio}>
      <h1 className={styles.PageTitle}>
        {title}
      </h1>
      {description &&
        <React.Fragment>
          <div className={styles.vertcialLine}></div>
          <h5>{description}</h5>
        </React.Fragment>
      }
    </div>
  )
}

Bio.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.string,
}

Bio.defaultProps = {
  description: null
}

export default Bio
