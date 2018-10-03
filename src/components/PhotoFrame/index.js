import React from 'react'
import PropTypes from 'prop-types'
import styles from "./PhotoFrame.module.css"

function PhotoFrame(props) {
  const {
    imageUrl,
    imageTitle,
    ...restProps
  } = props

  return (
    <div>
      <img className={styles.imageFrame} src={imageUrl} alt={imageTitle}/>
      <p className={styles.imageTitle} >{imageTitle}</p>
    </div>
  )
}

PhotoFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTitle: PropTypes.string
}

export default PhotoFrame
