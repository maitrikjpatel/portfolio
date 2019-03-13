import React from 'react'
import styles from './Resume.module.css'
import PropTypes from 'prop-types'
import resume from "../../Assets/MaitrikResume.pdf"

function Resume(props) {
  const { ...restProps } = props

  const resumeUrl = `${resume}#navpanes=0&scrollbar=0&Zoom=100%&view=Fit`

  return (  
    
    // <embed src={resumeUrl} type="application/pdf" width="100%" height="750px"></embed>
    // <object data={resumeUrl} type="application/pdf" width="100%" height="750px"></object>
    // <iframe width="100%" height="750px" src={resumeUrl} gesture="media"  allow="encrypted-media" allowfullscreen />
    
    <embed 
      className={styles.Resume}
      type="application/pdf"
      src={resumeUrl} 
    > 
    </embed>
  )
}

Resume.propTypes = {}

export default Resume
