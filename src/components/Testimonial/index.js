import React from 'react';
import PropTypes from 'prop-types'

import { CarouselProvider, Slider , Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import siteInfo from '../../utilities/config/siteInfo'

import styles from './Testimonial.module.css'
import { Link } from '@reach/router';

function Testimonial(props) {
  const {
    variant,
    ...restProps 
  } = props

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  // const Recommendations = shuffle(siteInfo.Recommendations);   
  const Recommendations = siteInfo.Recommendations;   

  const RecommendationSlider = Recommendations.map((recommendation, index) =>
    <Slide index={index} key={index}>
      <p className={styles.recommendationRecco}>{recommendation.recco}</p>
      <div className={styles.recommendationPerson}>
        <p className={styles.recommendationName}>{recommendation.name}</p>
        <p className={styles.recommendationRole}>{recommendation.role}</p>
      </div>
    </Slide>
  );

  const RecommendationElements = Recommendations.map((recommendation, index) =>
    <div index={index} key={index} className={styles.Testimonial}>
      <div className={styles.recommendations}>
        <p className={styles.recommendationRecco}>{recommendation.recco}</p>
        <div className={styles.recommendationPerson}>
          <p className={styles.recommendationName}>{recommendation.name}</p>
          <p className={styles.recommendationRole}>{recommendation.role}</p>
        </div>
      </div>
    </div>
  );

  const CarouselActions = (
    <div className={styles.CarouselControls}>
      <ButtonBack className={styles.Back} />
      <ButtonNext className={styles.Next} />
    </div>
  )
  
  let TestimonialElement
  if (variant === "single") {
    TestimonialElement = (
      <div className={styles.Testimonial}>
        <div className={styles.recommendations} >
          <CarouselProvider
            naturalSlideWidth='768'
            naturalSlideHeight='250'
            totalSlides={Recommendations.length}
          >
            {CarouselActions}
            <Slider>
              {RecommendationSlider}
            </Slider>
          </CarouselProvider> 
        </div>
        <Link className={styles.SeeAll} to='/recommendations/'>See All</Link>
      </div>
    )
  } else if (variant === "multiple") {
    TestimonialElement = (
      <div className={styles.multipleTestimonial}>{RecommendationElements}</div>
    )
  }
  return (  
    <React.Fragment>
      {TestimonialElement}
    </React.Fragment>
  )
}

Testimonial.propTypes = {
  variant: PropTypes.string,
}

Testimonial.defaultProps = {
  variant: 'single'
}

export default Testimonial
