import React from 'react'
import Carousel from '../components/Carousel'
import ImageWrap from '../components/ImageWrap'
import Layout from '../components/Layout/'

const test = () => (
  <Layout>
    <h1>Components Test Page</h1>
    <ImageWrap srcName="CroudifyColors"/>
    <ImageWrap srcName="CroudifyLogo"/>
    <ImageWrap srcName="CroudifyWebsite"/> */}
    <Carousel 
      title='Aviatio' 
      variant='Aviatio' 
    />
    <Carousel 
      title='Prosper' 
      variant='Prosper' 
    />
    <Carousel 
      title='Croudify' 
      variant='Croudify' 
    />
    <Carousel 
      title='Gazetteer' 
      variant='Gazetteer' 
    />
  </Layout>
)

export default test
