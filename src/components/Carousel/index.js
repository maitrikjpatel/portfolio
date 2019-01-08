import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import PropTypes from 'prop-types'

function Carousel(props) {
  const { title, ...restProps } = props

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >        
      <Slider>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>{title}</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  )
}

Carousel.propTypes = {
  title: PropTypes.node.isRequired,
}

Carousel.defaultProps = {
}

export default Carousel
