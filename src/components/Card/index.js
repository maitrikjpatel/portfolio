import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from "./Card.module.css"

function Card(props) {
  const {
    title,
    description,
    role,
    tools,
    link,
    source,
    postColor,
    imageUrl,  
    ...restProps
  } = props

  return (
    <Link className={styles.card} to={link}>
      {imageUrl &&
        <div className={styles.cardImage} style={{ backgroundColor: {postColor} }}>
          <img className={styles.image} src={imageUrl} alt={title} />
        </div>
      }
      <div className={styles.cardContent}>
        <h3 className={styles.entryTitle}>{title}</h3>
        {role && <span style={{ color: {postColor} }}>{role}</span>}
      </div>
      <span className={styles.cardSource}>{source}</span>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  role: PropTypes.string,
  tools: PropTypes.string,
  link: PropTypes.string.isRequired,
  source: PropTypes.string,
  postColor: PropTypes.string,
  imageUrl: PropTypes.string,
}

Card.defaultProps = {
  description: null,
  role: null,
  tools: null,
  source: null,
  postColor: null,
  imageUrl: null,
}

export default Card
