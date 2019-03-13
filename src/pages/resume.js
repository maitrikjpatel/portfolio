import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import resume from "../Assets/MaitrikResume.pdf"
import Bio from '../components/Bio';

const NotFoundPage = () => {
   
  const resumeUrl = `${resume}#navpanes=0&scrollbar=0`

  return(
    <Layout>
      <SEO titleText="Resume" />
      
      <div style={{textAlign: "center"}}>
        <Bio title="Resume" />
        {/* <object data={resumeUrl} type="application/pdf" width="100%" height="750px"></object> */}
        {/* <embed src={resumeUrl} type="application/pdf"></embed> */}
        {/* <iframe src={resumeUrl} gesture="media"  allow="encrypted-media" allowfullscreen > */}

        <div style={{"position": "relative", "overflow": "hidden", "paddingTop": "56.25%"}}>
          <embed 
            style={{'position': 'absolute', 'top': '0', 'left': '0', 'width': '100%', 'height': '100%', 'border': '0'}}
            type="application/pdf"
            src={resumeUrl} 
          >
          </embed>
        </div>

        <p>If your browser does not support PDFs. Please download the PDF to view it : 
          <a href={resumeUrl}> Download PDF</a>.
        </p>
        <br/>
        <br/>
      </div>
    </Layout>
  )
}

export default NotFoundPage
