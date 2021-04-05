import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import resume from "../Assets/Maitrik_Resume.pdf"
import Bio from '../components/Bio';
import Resume from '../components/Resume';

const NotFoundPage = () => {
   
  const resumeUrl = `${resume}#navpanes=0&scrollbar=0`

  return(
    <Layout>
      <SEO titleText="Resume" />
      
      <div style={{textAlign: "center"}}>
        <Bio title="Resume" />
        <Resume />
        <p>If your browser does not support PDFs. Please download the Resume PDF to view it : 
          <a href={resumeUrl}> Download Resume PDF</a>.
        </p>
        <br/>
      </div>
    </Layout>
  )
}

export default NotFoundPage
