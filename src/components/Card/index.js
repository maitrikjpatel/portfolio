import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from "./Card.module.css"

function Card(props) {
  const {
    title,
    link,
    role,
    ...restProps
  } = props

  return (
    <div className={styles.card}>
      <h3 className={styles.entryTitle}>
        <Link style={{ boxShadow: 'none' }} to={link}>
          {title}
        </Link>
      </h3>
      <span>{role}</span>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  role: PropTypes.string,
}

Card.defaultProps = {
  role: null,
}

export default Card
