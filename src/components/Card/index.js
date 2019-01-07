import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './Card.module.css'

function Card(props) {
  const {
    title,
    description,
    role,
    topics,
    tools,
    link,
    source,
    postColor,
    imageUrl,
    ...restProps
  } = props

  let cardImageWrapperClass = {
    height: '200px',
    backgroundColor: postColor,
  }

  let cardImage = (
    <React.Fragment>
      {imageUrl && (
        <div style={cardImageWrapperClass}>
          <Img
            className={styles.cardImage}
            fluid={imageUrl}
            title={title}
            alt={title}
          />
        </div>
      )}
    </React.Fragment>
  )

  let cardSourceSvg
  if (source === 'Github') {
    cardSourceSvg = (
      <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="var(--color-gray3)"
          d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"
        />
      </svg>
    )
  } else {
    cardSourceSvg = (
      <svg viewBox="0 -3 25 25" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="var(--color-gray3)"
          d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"
        />
      </svg>
    )
  }

  let cardSubContent
  if (source) {
    cardSubContent = (
      <React.Fragment>
        {role && (
          <p className={styles.cardContentSpan}>
            <span style={{ color: { postColor } }}>{role}</span>
          </p>
        )}
        {topics && (
          <p className={styles.cardContentSpan}>
            <span style={{ color: { postColor } }}>{topics}</span>
          </p>
        )}
        <p className={styles.cardSource}>
          Source: {source}
          <span className={styles.cardSourceSvg}>{cardSourceSvg}</span>
        </p>
      </React.Fragment>
    )
  } else {
    cardSubContent = (
      <React.Fragment>
        {role && (
          <p className={styles.cardContentRoleSpan}>
            <span style={{ color: { postColor } }}>{role}</span>
          </p>
        )}
        {topics && (
          <p className={styles.cardContentRoleSpan}>
            <span style={{ color: { postColor } }}>{topics}</span>
          </p>
        )}
      </React.Fragment>
    )
  }

  return (
    <Link className={styles.card} to={link}>
      {cardImage}
      <div className={styles.cardContent}>
        <h3 className={styles.entryTitle}>{title}</h3>
        {cardSubContent}
      </div>
    </Link>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  role: PropTypes.string,
  topics: PropTypes.string,
  tools: PropTypes.string,
  link: PropTypes.string.isRequired,
  source: PropTypes.string,
  postColor: PropTypes.string,
  imageUrl: PropTypes.object,
}

Card.defaultProps = {
  description: null,
  role: null,
  topics: null,
  tools: null,
  source: null,
  postColor: null,
  imageUrl: null,
  postColor: '#f4f4f4',
}

export default Card
