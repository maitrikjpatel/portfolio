import React from 'react'
// import get from 'lodash/get'
// import Img from 'gatsby-image'
import { importAll, splitCamelCase } from '../../utilities/js'
import styles from './ImageWrapper.module.css'
import PropTypes from 'prop-types'

function ImageWrapper(props) {
  const { srcName, ...restProps } = props

  const AllSingleImages = importAll(require.context('../../Assets/Images/SingleImages/', true, /\.(png|jpe?g|svg)$/));

  return (
    <div>
      <img 
        className={styles.Image} 
        src={AllSingleImages[srcName.concat(".png")]} 
        alt={splitCamelCase(srcName)}
      />
    </div>
  )
}

ImageWrapper.propTypes = {
  srcName: PropTypes.string.isRequired,
}

export default ImageWrapper