import React from 'react'
import PropTypes from 'prop-types'
import styles from './PhotoFrame.module.css'

function PhotoFrame(props) {
  const { imageUrl, imageTitle, ...restProps } = props

  return (
    <React.Fragment>
      <img className={styles.image} src={imageUrl} alt={imageTitle} />
      <p className={styles.title}>{imageTitle}</p>
    </React.Fragment>
  )
}

PhotoFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTitle: PropTypes.string,
}

export default PhotoFrame
