import React from 'react'

import { StaticQuery, graphql } from "gatsby"
import { splitCamelCase } from '../../utilities/js'

import styles from './ImageWrap.module.css'
import Img from 'gatsby-image'

class ImageWrap extends React.Component {
  constructor(props) {
    super(props)

    const {
      ...restProps
    } = this.props

    this.state = {
      windowWidth: props.windowWidth
    }
  }

  componentDidMount() {
    this.setState({windowWidth: window.innerWidth})
  }

  render() { 
    const {
      data,
      srcName,
      title,
      width,
      ...restProps
    } = this.props

    const {
      windowWidth,
    } = this.state


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
    
    console.log(windowWidth)
    let ImageWidth
    if( windowWidth <= 768) {
      ImageWidth = 100
    } else {
      ImageWidth = width
    }
    console.log(ImageWidth)
    return (
      <div style={{ width: `${ImageWidth}%`}} className={styles.ImageWrap} >
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