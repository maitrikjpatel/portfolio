import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from "./Card.module.css"

function Card(props) {
  const {
    title,
    link,
    role,
    imageUrl,
    bgColor,
    ...restProps
  } = props

  return (
    <div className={styles.card}>
      {imageUrl && bgColor &&
        <div className={styles.image} style={{ backgroundColor: {bgColor} }}>
            <img src={imageUrl} alt={title} />
        </div>
      }
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
  imageUrl: PropTypes.string,
  bgColor: PropTypes.string,
}

Card.defaultProps = {
  role: null,
  imageUrl: null,
  bgColor: null,
}

export default Card
