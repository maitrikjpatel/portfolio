import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { importAll, splitCamelCase } from '../../utilities/js'
import SliderImages from '../../Assets/Images/SliderImages/index'
import styles from './PhotoGallery.module.css'

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class PhotoGallery extends Component {
  constructor(props) {
    super(props)
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

    const {
      title,
      variant,
      ...restProps
    } = props
  }
  
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    const {
      title,
      variant,
      ...restProps
    } = this.props

    const AllImages = importAll(require.context('../../Assets/Images/SliderImages/', true, /\.(png|jpe?g|svg)$/));
    
    function VariantImagesObject(SliderImages) {
      let VariantImages = []
      SliderImages[variant].Images.map((image, index) => {
        console.log(image.Text)
        VariantImages[index] = {
          src : AllImages[image.SrcUrl],
          width: Number(SliderImages[variant].width),
          height: Number(SliderImages[variant].height),
          caption: splitCamelCase(image.Text),
          alt: splitCamelCase(image.Text), 
          key: index,
        }
      });
      return VariantImages;
    }

    const VariantImages = VariantImagesObject(SliderImages)

    console.log(VariantImages)

    return (
      <div>
        {title && 
          <h3>{title}</h3>
        }
        <Gallery 
          photos={VariantImages} 
          onClick={this.openLightbox} 
          margin={5}
        />
        <Lightbox 
          images={VariantImages}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

PhotoGallery.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

PhotoGallery.defaultProps = {
  title: null,
}

export default PhotoGallery