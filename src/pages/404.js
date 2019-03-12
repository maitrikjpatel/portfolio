import React from 'react'
import Layout from '../components/Layout'
import ImageWrap from '../components/ImageWrap'
import siteInfo from '../utilities/config/siteInfo'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet
      title={`404 | ${siteInfo.siteTitle}`}
      meta={[
        { name: 'description', content: siteInfo.siteDescription },
        { name: 'keywords', content: siteInfo.toolsList.concat(siteInfo.skillsList) }
      ]}
    >
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta property="og:image" content={siteInfo.siteImage} />
      <meta name="image" content={siteInfo.siteImage} />
    </Helmet>
    
    <div style={{textAlign: "center"}}>
      <h1>404 - Oh Snap</h1>
      <h2>
        Couldn't find the page !!!<br/>
        Chewie will guide you <a href="/">Home</a>
      </h2>
      <ImageWrap srcName="404Image" width="75"/>
    </div>
  </Layout>
)

export default NotFoundPage
