import React from 'react'
import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'
import Bio from '../components/Bio'
import Helmet from 'react-helmet'
import siteInfo from '../utilities/config/siteInfo'

export default () => {
  return (
    <Layout>
      <Helmet
        title={`Recommendations | ${siteInfo.siteTitle}`}
        meta={[
          { name: 'description', content: siteInfo.siteDescription },
          { name: 'keywords', content: siteInfo.toolsList.concat(siteInfo.skillsList) }
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Bio title="Recommendations" />
      <Testimonial variant="multiple"/>
    </Layout>
  )
}
