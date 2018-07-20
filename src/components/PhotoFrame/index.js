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
        <img 
          className={styles.image} 
          // style={{backgroundImage: `url(${imageUrl})`}} 
          src={imageUrl}
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
