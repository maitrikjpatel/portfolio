import React from 'react';
import PropTypes from 'prop-types'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import siteInfo from '../../utilities/config/siteInfo'

import SliderImages from '../../Assets/Images/SliderImages/index'
import styles from './Testimonial.module.css'

function Testimonial(props) {
  const {
    ...restProps 
  } = props

  const Recommendations = siteInfo.Recommendations;

  const Slides = Recommendations.map((recommendation, index) =>
    <Slide  
      index={index}
      key={index}
      >
        <div className={styles.recommendation}>
          <p className={styles.recommendationRecco}>{recommendation.recco}</p>
          <div className={styles.recommendationPerson}>
            <p className={styles.recommendationName}><strong>{recommendation.name}</strong></p>
            <p className={styles.recommendationRole}>{recommendation.role}</p>
          </div>
        </div>
    </Slide>
  );

  console.log(Slides)
  
  const TestimonialActions = (
    <div className={styles.TestimonialActions}>
      <DotGroup className={styles.Dots}/>
      <div className={styles.TestimonialControls}>
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
    <div className={styles.Testimonial}>
      <CarouselProvider
        naturalSlideWidth="4.5"
        naturalSlideHeight="1"
        totalSlides={Recommendations.length}
        isPlaying
        interval='4000'
      >
        <Slider className={styles.Slider}>
          {Slides}
        </Slider>
        {TestimonialActions}
      </CarouselProvider>
    </div>
  )
}

Testimonial.propTypes = {
}

Testimonial.defaultProps = {
}

export default Testimonial
