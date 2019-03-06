import React from 'react'

import { StaticQuery, graphql } from "gatsby"
import { splitCamelCase } from '../../utilities/js'

import styles from './ImageWrap.module.css'
import Img from 'gatsby-image'

class ImageWrap extends React.Component {
  render() { 
    const {
      data,
      srcName,
      title,
      width,
      ...restProps
    } = this.props

    var fluidSrc = data.allImageSharp.edges.find( function( image ){
      const fileName = image.node.fluid.originalName.replace(/\.[^/.]+$/, "")
      return fileName === srcName;
    })

    let titleText
    if (title) {
      titleText = title
    }else {
      titleText = splitCamelCase(srcName)
    }
    
    return (
      <div style={{ width: `${width}%`}} className={styles.ImageWrap} >
        <Img
          className={styles.Image} 
          fluid={fluidSrc.node.fluid}
          alt={titleText}
        />
        {titleText && 
          <p>{titleText}</p>
        }
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges{
            node{
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => 
      <ImageWrap data={data} {...props} />
    }
  />
)