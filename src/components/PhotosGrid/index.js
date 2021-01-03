import React from 'react'
import PropTypes from 'prop-types'
import styles from './PhotosGrid.module.css'
import { importAll, splitCamelCase } from '../../utilities/js'
function PhotosGrid(props) {
  const { children, ...restProps } = props
  const AllImages = importAll(require.context('../../Assets/Images/SkyCornerz/', true, /\.(png|jpe?g|svg)$/));
  
  return (
    <div className={styles.photosGrid}>
      <h1 className={styles.photosGridTitle}>{children}</h1>
      {Object.keys(AllImages).map((key, index) => (
        <img
          key={index}
          src={AllImages[key]}
          alt={`sc image ${index}`}
          className={styles.photosGridPhoto}
        />
      ))}
    </div>
  )
}

PhotosGrid.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PhotosGrid
