import React from "react"
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import PhotoFrame from '../components/PhotoFrame'


export default () => (
  <Layout>
    <Bio 
      title="Photos"
      description="My photographs tells the story, I fail to put into words."
    />
    <div className="flexWrapper">
      <PhotoFrame imageTitle="Roads" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="Skyrunner" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="Ocean with line" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="Food" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="People" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="Kaitrik" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="Drone" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="Micro" imageUrl="https://source.unsplash.com/random" />
      <PhotoFrame imageTitle="Random" imageUrl="https://source.unsplash.com/random" />
    </div>
   </Layout>
)