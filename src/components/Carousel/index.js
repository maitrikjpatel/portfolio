import React from 'react';
import PropTypes from 'prop-types'

import { CarouselProvider, Slider, Image, Dot, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './Carousel.module.css'

import SliderImages from './work/index'

import AviatioImageOne from './work/Aviatio/AviatioSS1.jpg'
import AviatioImageTwo from './work/Aviatio/AviatioSS2.jpg'
import AviatioImageThree from './work/Aviatio/AviatioSS3.jpg'
import AviatioImageFour from './work/Aviatio/AviatioSS4.jpg'


function Carousel(props) {

  const {
    title,
    variant,
    ...restProps 
  } = props

  console.log(SliderImages);
  console.log(AviatioImageOne);

  // NOTE: How to import multiple files at once
  // NOTE: Gatsby-source-System for images and use those links or use graphql to get them
  
  // const SliderImages = {
  //   Aviatio: {
  //     width: "1024",
  //     height: "670",
  //     Images: [
  //       {
  //         SrcUrl: AviatioImageOne,
  //         Text: "AviatioImageOne",
  //       },
  //       {
  //         SrcUrl: AviatioImageTwo,
  //         Text: "AviatioImageTwo"
  //       },
  //       {
  //         SrcUrl: AviatioImageThree,
  //         Text: "AviatioImageThree"
  //       },
  //       {
  //         SrcUrl: AviatioImageFour,
  //         Text: "AviatioImageFour"
  //       }
  //     ]
  //   }
  // }

  const Slides = SliderImages.Gazetteer.Images.map((image, index) =>
    <Slide 
      innerClassName={styles.Slide} 
      index={index}
      key={index}
      >
        <Image src={image.SrcUrl} alt={image.Text} />
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
        naturalSlideWidth={SliderImages.Aviatio.width}
        naturalSlideHeight={SliderImages.Aviatio.height}
        totalSlides={SliderImages.Aviatio.Images.length}
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
