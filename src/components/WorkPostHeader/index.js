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
    height: '250px',
    width: '50%',
    backgroundColor: postColor
  }

  let WorkPostHeaderImage = (
    <React.Fragment>
      {imageUrl &&
        <div style={WorkPostHeaderImageWrapperClass}>
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
      <div>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {role && <p>{role}</p>}
        {tools && <p>{tools}</p>}
        {link && <p>{link}</p>}
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
