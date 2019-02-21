import React from 'react';
import PropTypes from 'prop-types'

import { importAll, splitCamelCase } from '../../utilities/js'
import { CarouselProvider, Slider, Image, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import SliderImages from '../../Assets/Images/SliderImages/index'
import styles from './Carousel.module.css'

function Carousel(props) {
  const {
    title,
    variant,
    kind,
    ...restProps 
  } = props

  const AllImages = importAll(require.context('../../Assets/Images/SliderImages/', true, /\.(png|jpe?g|svg)$/));

  // Max 12 slides without title and 14 slides with title
  const Slides = SliderImages[variant].Images.map((image, index) =>
    <Slide 
      innerClassName={styles.Slide} 
      index={index}
      key={index}
      >
        <Image src={AllImages[image.SrcUrl]} alt={splitCamelCase(image.Text)} />
        <p className={styles.CarouselText}>{splitCamelCase(image.Text)}</p>
    </Slide>
  );

  let CarouselActions
  if (kind === "vertical") {
    CarouselActions = (
      <div className={styles.VerticalCarouselActions}>
        <DotGroup className={styles.Dots}/>
        <div className={styles.CarouselControls}>
          <ButtonNext className={styles.Next} />
          <ButtonBack className={styles.Back} />
          <ButtonPlay 
            childrenPlaying="&#9632;" 
            childrenPaused="&#9654;" 
            className={styles.PlayPause} 
          />
        </div>
      </div>
    )
  } else {
    CarouselActions = (
      <div className={styles.CarouselActions}>
        <DotGroup className={styles.Dots}/>
        <div className={styles.CarouselControls}>
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
  }
  
  const SliderClass = (kind === "vertical") ? styles.VerticalSlider : styles.Slider

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
        <Slider className={SliderClass}>
          {Slides}
        </Slider>
        {CarouselActions}
      </CarouselProvider>
    </div>
  )
}

Carousel.propTypes = {
  kind: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

Carousel.defaultProps = {
  title: null,
  kind: 'horizontal'
}

export default Carousel
