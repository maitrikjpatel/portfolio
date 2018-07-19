import React from 'react'
import PropTypes from 'prop-types'
import styles from "./PhotoFrame.module.css"

function PhotoFrame(props) {
  const {
    imageUrl,
    ...restProps
  } = props

  return (
    <div className={styles.frameBorder}>
      <div className={styles.frame}>
        <div 
          className={styles.image} 
          style={{backgroundImage: `url(${imageUrl})`}} 
        />
      </div>
    </div>
    // <img className={styles.imageFrame} src={imageUrl}/>
  )
}

PhotoFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default PhotoFrame
