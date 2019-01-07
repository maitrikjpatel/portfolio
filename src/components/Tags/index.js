import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tags.module.css'

function Tags(props) {
  const { tags, ...restProps } = props

  const tagsList = tags.map(tag => (
    <p className={styles.Tag} key={tag.toString()}>
      {tag}
    </p>
  ))

  return <div className={styles.Tags}>{tagsList}</div>
}

Tags.propTypes = {
  tags: PropTypes.array,
}

Tags.defaultProps = {
  tags: null,
}

export default Tags
