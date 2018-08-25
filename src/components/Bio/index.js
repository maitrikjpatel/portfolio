import React from 'react'
import PropTypes from 'prop-types'
import styles from './Bio.module.css'

function Bio(props) {
  const {
  children,
  description,
  title,
  ...restProps
  } = props

  return (
    <div className={styles.Bio}>
      <h1 className={styles.PageTitle}>
        {title}
      </h1>
      <div className={styles.vertcialLine} />
      {description &&
        <h5>{description}</h5>
      }
      {children &&
        <h5>{children}</h5>
      }
    </div>
  )
}

Bio.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.string,
}

Bio.defaultProps = {
  children: null,
  description: null
}

export default Bio
