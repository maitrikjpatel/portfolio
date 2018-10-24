import React from 'react'
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from "./WorkPostHeader.module.css"

function WorkPostHeader(props) {
  const {
    title,
    description,
    role,
    tools,
    link,
    postColor,
    imageUrl,  
    ...restProps
  } = props
  
  let WorkPostHeaderImageWrapperClass = {
    minHeight: '200px',
    height: '100%',
    width:  '250px',
    backgroundColor: postColor,
  }

  let WorkPostHeaderContentWrapperClass = {
    minHeight: '200px',
    height: '100%',
    width:  '100%',
    backgroundColor: '#fff',
    padding: '15px 30px',
  }

  let WorkPostHeaderImage = (
    <React.Fragment>
      {imageUrl &&
        <div className={styles.WorkPostHeaderWrapper} style={WorkPostHeaderImageWrapperClass}>
          <Img 
            className={styles.WorkPostHeaderImage} 
            fluid={imageUrl}
          />
        </div>
      }
    </React.Fragment>
  )
  
  return (
    <div className={styles.WorkPostHeader} >
      {WorkPostHeaderImage}
      <div style={WorkPostHeaderContentWrapperClass}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <div className={styles.WorkPostHeaderContentSplitter} />
        {role && <p>Role : {role}</p>}
        {tools && <p>Toole : {tools}</p>}
        {link && <p>Link : {link}</p>}
      </div>
    </div>
  )
}

WorkPostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  role: PropTypes.string,
  tools: PropTypes.string,
  link: PropTypes.string,
  postColor: PropTypes.string,
  imageUrl: PropTypes.object,
}

WorkPostHeader.defaultProps = {
  description: null,
  role: null,
  link: null,
  tools: null,
  imageUrl: null,
  postColor: '#f4f4f4'
}

export default WorkPostHeader
