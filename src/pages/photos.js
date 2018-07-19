import React from "react"
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import PhotoFrame from '../components/PhotoFrame'


export default () => (
  <Layout>
    <PageTitle text="Photos"/>
    <div className="flexbox">
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x300"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x500"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/400x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/500x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x300"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x500"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/400x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/500x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x300"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/300x500"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/400x400"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/500x200"/>
      <PhotoFrame imageUrl="https://source.unsplash.com/random/200x200"/>
    </div>
   </Layout>
)