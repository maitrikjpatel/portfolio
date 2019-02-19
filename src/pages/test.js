import React from 'react'
import Carousel from '../components/Carousel'
import ImageWrap from '../components/ImageWrap'
import Layout from '../components/Layout/'

const test = () => (
  <Layout>
    <h1>Components Test Page</h1>
    <ImageWrap srcName="CroudifyColors"/>
    <ImageWrap srcName="CroudifyLogo"/>
    <ImageWrap srcName="CroudifyWebsite"/>
    <ImageWrap srcName="SonyNavigationWithFilter"/>
    <Carousel 
      title='Aviatio' 
      variant='Aviatio'
      kind="vertical"
    />
    <Carousel 
      variant='Aviatio'
    />
  </Layout>
)

export default test
