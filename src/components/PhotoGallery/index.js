import React from 'react'
import styles from './PhotoGallery.module.css'
import PropTypes from 'prop-types'

function PhotoGallery(props) {
  const { children, ...restProps } = props

  return <h1 className={styles.PhotoGallery}>{children}</h1>
}

PhotoGallery.propTypes = {
  children: PropTypes.node,
}

export default PhotoGallery
