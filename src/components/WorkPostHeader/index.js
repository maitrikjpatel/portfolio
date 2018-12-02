import React from 'react'
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import styles from "./WorkPostHeader.module.css"
import BrowserFrame from '../BroswerFrame'

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

  function hexToRgbA(hex){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.8)';
    }
    return hex
  }
  const rgbPostColor = hexToRgbA(postColor)

  const linkUrl = `https://${link}`

  let WorkPostColorWrapper = {
    background: `linear-gradient(180deg, ${rgbPostColor} 0%, rgba(250,250,250,1) 100%)`,
    paddingBottom: 'var(--space-40)'
  }

  let WorkPostHeaderImage = (
    <React.Fragment>
      {imageUrl &&
        <Img 
          className={styles.WorkPostHeaderImage} 
          fluid={imageUrl}
        />
      }
    </React.Fragment>
  )
  
  return (
    <BrowserFrame>
      <div style={WorkPostColorWrapper}>
        {WorkPostHeaderImage}
        <div className={styles.WorkPostTitleWrapper}>
          {title && <h1 className={styles.WorkPostTitle}>{title}</h1>}
          {link && 
            <p className={styles.WorkPostSubTitle}>
              <a target="_blank" href={linkUrl}>
                {link}
              </a>
            </p>
          }
        </div>
        <div className={styles.WorkPostDescription}>
          {role && <p><strong>Role :</strong> {role}</p>}
          {tools && <p><strong>Tool :</strong> {tools}</p>}
        </div>
      </div>
    </BrowserFrame>
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
