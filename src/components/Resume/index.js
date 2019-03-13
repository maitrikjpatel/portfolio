import React from 'react'
import styles from './Resume.module.css'
import PropTypes from 'prop-types'
import resume from "../../Assets/MaitrikResume.pdf"

function Resume(props) {
  const { ...restProps } = props

  const resumeUrl = `${resume}#navpanes=0&scrollbar=0&Zoom=100%&view=Fit`

  return (  

    // <object data={resumeUrl} type="application/pdf" width="100%" height="750px"></object>
    // <embed src={resumeUrl} type="application/pdf" width="100%" height="750px"></embed>
    // <iframe width="100%" height="750px" src={resumeUrl} gesture="media"  allow="encrypted-media" allowfullscreen />
    
    <div className={styles.ResumeWrapper}>
      <embed 
        className={styles.Resume}
        type="application/pdf"
        src={resumeUrl} 
      >
      </embed>
    </div>
  )
}

Resume.propTypes = {}

export default Resume
