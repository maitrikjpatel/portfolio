import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styles from './PostHeader.module.css'
import BrowserFrame from '../BroswerFrame'

function PostHeader(props) {
  const {
    title,
    description,
    role,
    tools,
    topics,
    link,
    date,
    author,
    postColor,
    imageUrl,
    ...restProps
  } = props

  function hexToRgbA(hex, opacity) {
    var c
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('')
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]]
      }
      c = '0x' + c.join('')
      return (
        'rgba(' +
        [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
        ',' +
        opacity +
        ')'
      )
    }
    return hex
  }

  let rgbPostColor
  if (postColor) {
    rgbPostColor = hexToRgbA(postColor, 0.4)
  } else {
    rgbPostColor = 'rgba(255,255,255,0)'
  }

  let PostColorWrapper = {
    background: `linear-gradient(180deg, ${rgbPostColor} 0%, rgba(250,250,250,1) 100%)`,
    paddingBottom: 'var(--space-40)',
  }

  const linkUrl = `https://${link}`

  let PostHeaderImage = (
    <React.Fragment>
      {imageUrl && <Img className={styles.PostHeaderImage} fluid={imageUrl} />}
    </React.Fragment>
  )

  return (
    <BrowserFrame>
      <div className={styles.PostDottedWrapper}>
        <div style={PostColorWrapper}>
          {PostHeaderImage}
          <div className={styles.PostTitleWrapper}>
            {title && <h1 className={styles.PostTitle}>{title}</h1>}
            {link &&
              <p className={styles.PostSubTitle}>
                <a target="_blank" rel="noopener" href={linkUrl}>
                  {link}
                </a>
              </p>
            }
            {description &&
              <p className={styles.PostSubTitle}>{description}</p>
            }
          </div>
          {tools && role &&
            <div className={styles.PostDescription}>
              {role && 
                <p>
                  <strong>Role :</strong> {role}
                </p>
              }
              {tools && 
                <p>
                  <strong>Tools :</strong> {tools}
                </p>
              }
            </div>
          }
          {topics && date && author &&
            <div className={styles.PostDescription}>
              {date &&
                <p>
                  <strong>Last Updated: </strong> {date}
                </p>
              }
              {topics && 
                <p>
                  <strong>Topics : </strong> {topics}
                </p>
              }
              {author && 
                <p>
                  <strong>Author : </strong> {author}
                </p>
              }
            </div>
          }
        </div>
      </div>
    </BrowserFrame>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  role: PropTypes.string,
  tools: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.string,
  topics: PropTypes.string,
  author: PropTypes.string,
  postColor: PropTypes.string,
  imageUrl: PropTypes.object,
}

PostHeader.defaultProps = {
  description: null,
  role: null,
  link: null,
  tools: null,
  date: null,
  topics: null,
  author: null,
  imageUrl: null,
  postColor: null,
}

export default PostHeader
