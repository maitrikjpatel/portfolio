import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tags.module.css'

function Tags(props) {
  const {
    tags,
  ...restProps
  } = props

  const tagsList = tags.map((tag) =>
    <p className={styles.Tag}>{tag}</p>
  )

  console.log(tagsList)

  return (
    <div className={styles.Tags}>
      {tagsList}
    </div>
  )
}

Tags.propTypes = {
  tags: PropTypes.arrayOf,
}

Tags.defaultProps = {
  tags: null
}

export default Tags
