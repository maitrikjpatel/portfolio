import React from 'react'
// import get from 'lodash/get'
import styles from './ImageWrapper.module.css'
import PropTypes from 'prop-types'
// import Img from 'gatsby-image'

function ImageWrapper(props) {
  const { srcName, ...restProps } = props

  // Import All Images
  function importAll(r) {
    let AllImages = {};
    r.keys().map((item, index) => { 
      AllImages[item.replace('./', '')] = r(item); 
    });
    return AllImages;
  }
  const AllSingleImages = importAll(require.context('../../Assets/Images/SingleImages/', true, /\.(png|jpe?g|svg)$/));

  console.log(AllSingleImages)
  
  return (
    <div>
      <img 
        className={styles.Image} 
        src={AllSingleImages[srcName]} 
        alt={srcName}
      />
    </div>
  )
}

ImageWrapper.propTypes = {
  srcName: PropTypes.string.isRequired,
}

export default ImageWrapper