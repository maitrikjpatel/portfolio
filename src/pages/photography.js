import React from 'react'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import styles from '../utilities/css/pages/Photography.module.css'

export default () => (
  <Layout>
    <Bio
      title="Photos"
      description="My photographs tells the story, I fail to put into words."
    />
    <div className={styles.PhotosWrapper}>
      <p>My Photographs will be here soon.</p>
    </div>
  </Layout>
)
