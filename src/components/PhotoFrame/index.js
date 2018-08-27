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
    <img className={styles.imageFrame} src={imageUrl}/>
    // <div>
    //   <p>{imageTitle}</p>
    // </div>
  )
}

PhotoFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTitle: PropTypes.string
}

export default PhotoFrame
