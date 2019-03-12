import React from 'react'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import styles from '../utilities/css/pages/Photography.module.css'
import siteInfo from '../utilities/config/siteInfo'
import Helmet from 'react-helmet'

export default () => (
  <Layout>
    <Helmet
      title={`Moments | ${siteInfo.siteTitle}`}
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
    <Bio
      title="Photos"
      description="My photographs tells the story, I fail to put into words."
    />
    <div className={styles.PhotosWrapper}>
      <p>My Photographs will be here soon.</p>
    </div>
  </Layout>
)
