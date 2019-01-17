import React from 'react';
import PropTypes from 'prop-types'

import { CarouselProvider, Slider, Image, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import BroswerFrame from '../BroswerFrame'
import AviatioImage1 from './work/Aviatio/AviatioSS1.jpg'
import AviatioImage2 from './work/Aviatio/AviatioSS2.jpg'
import AviatioImage3 from './work/Aviatio/AviatioSS3.jpg'
import AviatioImage4 from './work/Aviatio/AviatioSS4.jpg'
import AviatioImage5 from './work/Aviatio/AviatioSS5.jpg'

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
    <React.Fragment>
      <h2>Variant Type : {variant}</h2>
        <CarouselProvider
          naturalSlideWidth={1024}
          naturalSlideHeight={670}
          totalSlides={5}
          isPlaying
          interval='2000'
        >        
          <BroswerFrame>
            <Slider>
              <Slide index={0}><Image src={AviatioImage1} alt=""></Image><p>Image Name : 1</p></Slide>
              <Slide index={1}><Image src={AviatioImage2} alt=""></Image><p>Image Name : 2</p></Slide>
              <Slide index={2}><Image src={AviatioImage3} alt=""></Image><p>Image Name : 3</p></Slide>
              <Slide index={3}><Image src={AviatioImage4} alt=""></Image><p>Image Name : 4</p></Slide>
              <Slide index={4}><Image src={AviatioImage5} alt=""></Image><p>Image Name : 5</p></Slide>
            </Slider>
          </BroswerFrame>
          <DotGroup />
          <ButtonBack>&#129120;</ButtonBack>
          <ButtonNext>&#129122;</ButtonNext>
          <ButtonPlay childrenPlaying="&#9632;" childrenPaused="&#9654;"><p></p></ButtonPlay> 
        </CarouselProvider>
    </React.Fragment>
  )
}

Carousel.propTypes = {
  title: PropTypes.node.isRequired,
}

Carousel.defaultProps = {
}

export default Carousel
