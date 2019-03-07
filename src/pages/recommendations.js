import React from 'react'
import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'
import Bio from '../components/Bio'

export default () => {
  return (
    <Layout>
      <Bio title="Recommendations" />
      <Testimonial variant="multiple"/>
    </Layout>
  )
}
