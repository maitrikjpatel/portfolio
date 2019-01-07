import React from 'react'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import PhotoFrame from '../components/PhotoFrame'
import styles from '../utils/css/pages/Photography.module.css'

export default () => (
  <Layout>
    <Bio
      title="Photos"
      description="My photographs tells the story, I fail to put into words."
    />
    <div className={styles.PhotosWrapper}>
      <div>
        <PhotoFrame
          imageTitle="Roads"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="Skyrunner"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="Ocean with line"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="Food"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="People"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="Kaitrik"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="Drone"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="Micro"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
      <div>
        <PhotoFrame
          imageTitle="Random"
          imageUrl="https://source.unsplash.com/random"
        />
      </div>
    </div>
  </Layout>
)
