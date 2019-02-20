import React from 'react'
import Carousel from '../components/Carousel'
import ImageWrap from '../components/ImageWrap'
import Layout from '../components/Layout/'
import PhotoGallery from '../components/PhotoGallery/'

const test = () => (
  <Layout>
    <PhotoGallery variant="Sony"/>
    <PhotoGallery variant="Aviatio" title="Aviatio"/>
    <PhotoGallery variant="Gazetteer" title="Gazetteer"/>
    <PhotoGallery variant="Waxman" title="Waxman" columns={2}/>
    <PhotoGallery variant="Croudify" title="Croudify" columns={2}/>
    <PhotoGallery variant="CroudifyConcept" title="CroudifyConcept" columns={2}/>
  </Layout>
)

export default test
