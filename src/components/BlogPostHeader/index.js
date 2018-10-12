import React from 'react'
import PropTypes from 'prop-types'
import styles from "./BlogPostHeader.module.css"

function BlogPostHeader(props) {
  const {
    title,
    description,
    role,
    date,
    author,
    postColor,
    ...restProps
  } = props
  
  return (
    <div className={styles.BlogPostHeader} >
      <div style={{ color: {postColor} }}>
        <h1 className={styles.entryTitle}>{title}</h1>
        <p>{description}</p>
        <p>{role}</p>
        <p>{date}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}

BlogPostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  role: PropTypes.string,
  date: PropTypes.string.isRequired,
  author: PropTypes.string,
  postColor:PropTypes.string,
}

BlogPostHeader.defaultProps = {
  description: null,
  role: null,
  author: null,
  postColor: '#f4f4f4'
}

export default BlogPostHeader
