import React from 'react'
import styles from './Resume.module.css'
import resume from "../../Assets/MaitrikResume.pdf"

function Resume(props) {
  const { ...restProps } = props

  const resumeUrl = `${resume}#navpanes=0&scrollbar=0&Zoom=100%&view=Fit`

  return (  
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
