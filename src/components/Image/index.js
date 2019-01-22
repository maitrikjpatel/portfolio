import React from 'react'
import get from 'lodash/get'
import styles from './Image.module.css'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

function Image(props) {
  const { text, ...restProps } = props

  // Import All Images
  function importAll(r) {
    let AllImages = {};
    r.keys().map((item, index) => { 
      AllImages[item.replace('./', '')] = r(item); 
    });
    return AllImages;
  }
  const AllImages = importAll(require.context('../../Assets/Images/SingleImages/', true, /\.(png|jpe?g|svg)$/));

  console.log(AllImages)
  
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

Image.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Image