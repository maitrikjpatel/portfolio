import React from 'react'
import Layout from '../components/Layout'
import ImageWrap from '../components/ImageWrap'
import SEO from '../components/SEO'

const NotFoundPage = () => (
  <Layout>
    <SEO titleText="404" />
    
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
