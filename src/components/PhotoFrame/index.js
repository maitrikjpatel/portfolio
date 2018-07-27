import React from 'react'
import PropTypes from 'prop-types'
import styles from "./PhotoFrame.module.css"

function PhotoFrame(props) {
  const {
    // photoGridTitle,
    imageUrl,
    ...restProps
  } = props

  return (
    // Take 1
    <img className={styles.imageFrame} src={imageUrl}/>

    // Take 2
    // <div className={styles.frameBorder}>
    //   <div className={styles.frame}>
    //     <img 
    //       className={styles.image} 
    //       style={{backgroundImage: `url(${imageUrl})`}} 
    //       src={imageUrl}
    //       />
    //   </div>
    // </div>
    
    // Take 3
    // <div classname="photoGrid">
    //   <h1 classname="phootGridTitle">{photoGridTitle}</h1>
    //   <img src="https://source.unsplash.com/random/600x690" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/609x600" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/660x600" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/610x660" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/600x660" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/600x605" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/605x600" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/600x607" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/608x600" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/600x608" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/612x600" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/601x640" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/601x620" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/601x630" alt className="photoGridPhoto" />
    //   <img src="https://source.unsplash.com/random/611x600" alt className="photoGridPhoto" />
    // </div>
  )
}

PhotoFrame.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default PhotoFrame
