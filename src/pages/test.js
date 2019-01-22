import React from 'react'
import Carousel from '../components/Carousel'
import Image from '../components/Image'
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
    <Image text="Image Test"/>
  </Layout>
)

export default test
