import React from 'react'
import Carousel from '../components/Carousel'
import ImageWrap from '../components/ImageWrap'
import Layout from '../components/Layout/'
import PhotoGallery from '../components/PhotoGallery/'

const test = () => (
  <Layout>
    <PhotoGallery variant="Sony"/>
    <PhotoGallery variant="Aviatio" title="Aviatio"/>
    <PhotoGallery variant="Waxman" title="Waxman"/>
    <PhotoGallery variant="Croudify" title="Croudify"/>

  </Layout>
)

export default test
