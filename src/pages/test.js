import React from 'react'
import Carousel from '../components/Carousel'
import ImageWrapper from '../components/ImageWrapper'
import Layout from '../components/Layout/'

const test = () => (
  <Layout>
    <h1>Components Test Page</h1>
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
    <ImageWrapper srcName="Croudify/CroudifyColors.png"/>
  </Layout>
)

export default test
