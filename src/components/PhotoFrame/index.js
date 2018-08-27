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
      <img className={styles.imageFrame} src={imageUrl}/>
      <p className={styles.imageTitle} >Image Title</p>
    </div>
  )
}

PhotoFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTitle: PropTypes.string
}

export default PhotoFrame
