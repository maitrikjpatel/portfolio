import React from 'react'
import Layout from '../components/Layout'
import ImageWrap from '../components/ImageWrap'

const NotFoundPage = () => (
  <Layout>
    <div style={{textAlign: "center"}}>
      <h1>404 - Oh Snap !</h1>
      <h2>
        Couldn't find the page<br/>
        Chewie will guide you to <a href="/">home</a>
      </h2>
      <ImageWrap srcName="404Image" width="40"/>
    </div>
  </Layout>
)

export default NotFoundPage
