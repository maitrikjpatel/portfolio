import React from 'react'
import PropTypes from 'prop-types'
import styles from "./PhotosGrid.module.css"
// import photoFrame from "../PhotoFrame/"

function PhotosGrid(props) {
  const {
    children,
    ...restProps
  } = props

  return (
  <div className={styles.photosGrid}>
    <h1 className={styles.photosGridTitle}>{children}</h1>
    <img src="https://source.unsplash.com/random/600x690" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/609x600" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/660x600" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/610x660" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/600x660" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/600x605" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/605x600" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/600x607" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/608x600" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/600x608" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/612x600" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/601x640" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/601x620" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/601x630" alt="" className={styles.photosGridPhoto} />
    <img src="https://source.unsplash.com/random/611x600" alt="" className={styles.photosGridPhoto} />
  </div>
  )
}

PhotosGrid.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PhotosGrid
