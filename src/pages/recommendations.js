import React from 'react'
import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'

export default () => {
  return (
    <Layout>
      <h1 style={{textAlign:"center"}}>Recommendations</h1>
      <Testimonial variant="multiple"/>
    </Layout>
  )
}
