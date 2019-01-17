import React from 'react';
import { CarouselProvider, Slider, Image, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import PropTypes from 'prop-types'
import AviatioImage from './work/Aviatio/AviatioSS1.jpg'

function Carousel(props) {
  const { title, ...restProps } = props

  const styles = {
    // height: '200px',
  }

  return (
    <div style={styles}>
      <h2>{title}</h2>
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={7}
        totalSlides={5}
      >        
        <Slider>
          <Slide index={0}><Image src={AviatioImage} alt=""/></Slide>
          <Slide index={1}><Image src={AviatioImage} alt=""/></Slide>
          <Slide index={2}><Image src={AviatioImage} alt=""/></Slide>
          <Slide index={3}><Image src={AviatioImage} alt=""/></Slide>
          <Slide index={4}><Image src={AviatioImage} alt=""/></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

Carousel.propTypes = {
  title: PropTypes.node.isRequired,
}

Carousel.defaultProps = {
}

export default Carousel
