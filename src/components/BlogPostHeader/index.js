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
      <div className={styles.BlogPostTitleWrapper}>
        {title && <h1 className={styles.BlogPostTitle}>{title}</h1>}
        {description && <p className={styles.BlogPostSubTitle}>{description}</p>}
      </div>
        <div className={styles.BlogPostDescription}>
          {role && <p>Roles : {role}</p>}
          {date && <p>Last Updated: {date}</p>}
          {author && <p>Author : {author}</p>}
        </div>
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
