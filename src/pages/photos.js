import React from "react"
import Layout from '../components/Layout'
import H1Title from '../components/H1Title'
import PhotoFrame from '../components/PhotoFrame'


export default () => (
  <Layout>
    <H1Title text="Photos"/>
    <div className="flexbox">
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x300"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x500"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/400x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/500x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x200"/>
    </div>
   </Layout>
)