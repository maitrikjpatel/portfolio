import React from 'react';
import PropTypes from 'prop-types'

import { CarouselProvider, Slider, Image, Dot, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import BroswerFrame from '../BroswerFrame'
import styles from './Carousel.module.css'

import AviatioImage1 from './work/Aviatio/AviatioSS1.jpg'
import AviatioImage2 from './work/Aviatio/AviatioSS2.jpg'
import AviatioImage3 from './work/Aviatio/AviatioSS3.jpg'
import AviatioImage4 from './work/Aviatio/AviatioSS4.jpg'

function Carousel(props) {
  const { variant, ...restProps } = props

  // height : Work.height
  // width : Work.width
  // TotalSlides : Work.images.length
  // Src : Work.images { image.src }
  // Alt : Work.images { image.text }
  // Image Name : Work.images { image.text }

  // { 
  //   Sony: {
  //     width: ""
  //     height: ""
  //     Images: {
  //       image1: {
  //         src: ""
  //         text: ""
  //       }
  //     }
  //   }
  //   DocuSign: {
  //     width: ""
  //     height: ""
  //     Images: {
  //       image1: {
  //         src: ""
  //         text: ""
  //       }
  //     }
  //   }
  // }
  
  return (
    <div className={styles.Carousel}>
      <h2>Variant Type : {variant}</h2>
      <CarouselProvider
        naturalSlideWidth={1024}
        naturalSlideHeight={670}
        totalSlides={4}
        isPlaying
        interval='4000'
      >        
        <Slider className={styles.Slider}>
          <Slide innerClassName={styles.Slide} index={0}><Image src={AviatioImage1} alt=""></Image></Slide>
          <Slide innerClassName={styles.Slide} index={1}><Image src={AviatioImage2} alt=""></Image></Slide>
          <Slide innerClassName={styles.Slide} index={2}><Image src={AviatioImage3} alt=""></Image></Slide>
          <Slide innerClassName={styles.Slide} index={3}><Image src={AviatioImage4} alt=""></Image></Slide>
        </Slider>
        <div className={styles.SliderActions}>
        
          <div className={styles.Dots}>
            <Dot className={styles.Dot} slide={0}><p className={styles.SlideText}>Image Name : 1</p></Dot>
            <Dot className={styles.Dot} slide={1}><p className={styles.SlideText}>Image Name : 2</p></Dot>
            <Dot className={styles.Dot} slide={2}><p className={styles.SlideText}>Image Name : 3</p></Dot>
            <Dot className={styles.Dot} slide={3}><p className={styles.SlideText}>Image Name : 4</p></Dot>
          </div>

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
