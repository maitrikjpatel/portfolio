import React from 'react'
import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'
import Bio from '../components/Bio'
import SEO from '../components/SEO'

export default () => {
  return (
    <Layout>
      <SEO titleText="Recommendations"/>
      <Bio title="Recommendations" />
      <Testimonial variant="multiple"/>
    </Layout>
  )
}
