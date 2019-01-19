import React from 'react'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout/'

const NotFoundPage = () => (
  <Layout>
    <h1>Components Test Page</h1>
    <Carousel 
      title='Aviatio' 
      variant='Aviatio' 
    /> 
    <Carousel 
      title='Gazetteer' 
      variant='Gazetteer' 
    />
    <Carousel 
      title='Prosper' 
      variant='Prosper' 
    />
  </Layout>
)

export default NotFoundPage
