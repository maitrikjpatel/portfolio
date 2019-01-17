import React from 'react';
import PropTypes from 'prop-types'

import { CarouselProvider, Slider, Image, Dot, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './Carousel.module.css'

import AviatioImageOne from './work/Aviatio/AviatioSS1.jpg'
import AviatioImageTwo from './work/Aviatio/AviatioSS2.jpg'
import AviatioImageThree from './work/Aviatio/AviatioSS3.jpg'
import AviatioImageFour from './work/Aviatio/AviatioSS4.jpg'

function Carousel(props) {

  const { 
    variant,
    ...restProps 
  } = props
  
  const tempObject = {
    Aviatio: {
      width: "1024",
      height: "670",
      Images: [
        {
          SrcUrl: AviatioImageOne,
          Text: "AviatioImageOne",
        },
        {
          SrcUrl: AviatioImageTwo,
          Text: "AviatioImageTwo"
        },
        {
          SrcUrl: AviatioImageThree,
          Text: "AviatioImageThree"
        },
        {
          SrcUrl: AviatioImageFour,
          Text: "AviatioImageFour"
        }
      ]
    }
  }

  console.log(variant)

  const Slides = tempObject.Aviatio.Images.map((image, index) =>
    <Slide 
      innerClassName={styles.Slide} 
      index={index}
      key={index}
      >
        <Image src={image.SrcUrl} alt={image.Text} />
        <p className={styles.SlideText}>{image.Text}</p>
    </Slide>
  );

  return (
    <div className={styles.Carousel}>
      <h3 className={styles.CarouselTitle}>{variant} Slider</h3>
      <CarouselProvider
        naturalSlideWidth={tempObject.Aviatio.width}
        naturalSlideHeight={tempObject.Aviatio.height}
        totalSlides={tempObject.Aviatio.Images.length}
        isPlaying
        interval='4000'
      >        
        <Slider className={styles.Slider}>
          {Slides}
        </Slider>

        <div className={styles.SliderActions}>
          <DotGroup className={styles.Dots}/>
          <div className={styles.SliderControls}>
            <ButtonBack className={styles.Back} />
            <ButtonPlay 
              childrenPlaying="&#9632;" 
              childrenPaused="&#9654;" 
              className={styles.PlayPause} 
            />
            <ButtonNext className={styles.Next} />
          </div>
        </div>

      </CarouselProvider>
    </div>
  )
}

Carousel.propTypes = {
  variant: PropTypes.string.isRequired,
}

Carousel.defaultProps = {
}

export default Carousel
