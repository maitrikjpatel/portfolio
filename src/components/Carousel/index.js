import React from 'react';
import PropTypes from 'prop-types'

import { CarouselProvider, Slider, Image, Dot, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import SliderImages from './work/index'
import styles from './Carousel.module.css'

function Carousel(props) {

  const {
    title,
    variant,
    ...restProps 
  } = props

  // Import All Images
  function importAll(r) {
    let AllImages = {};
    r.keys().map((item, index) => { 
      AllImages[item.replace('./', '')] = r(item); 
    });
    return AllImages;
  }
  const AllImages = importAll(require.context('./work/', true, /\.(png|jpe?g|svg)$/));

  // Import All Images
  const Slides = SliderImages[variant].Images.map((image, index) =>
    <Slide 
      innerClassName={styles.Slide} 
      index={index}
      key={index}
      >
        <Image src={AllImages[image.SrcUrl]} alt={image.Text} />
        <p className={styles.SlideText}>{image.Text}</p>
    </Slide>
  );

  const SliderActions = (
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
  )

  return (
    <div className={styles.Carousel}>
      <h3 className={styles.CarouselTitle}>{title}</h3>
      <CarouselProvider
        naturalSlideWidth={SliderImages[variant].width}
        naturalSlideHeight={SliderImages[variant].height}
        totalSlides={SliderImages[variant].Images.length}
        isPlaying
        interval='4000'
      >
        <Slider className={styles.Slider}>
          {Slides}
        </Slider>
        {SliderActions}
      </CarouselProvider>
    </div>
  )
}

Carousel.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

Carousel.defaultProps = {
  title: null,
}

export default Carousel
