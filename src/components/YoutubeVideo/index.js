import React from 'react'
import styles from './YoutubeVideo.module.css'
import PropTypes from 'prop-types'

function YoutubeVideo(props) {
  const { children, ...restProps } = props

  return <div className={styles.YoutubeVideoWrapper}>{children}</div>
}

YoutubeVideo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default YoutubeVideo
