import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { splitCamelCase } from '../../utilities/js'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

class ImageWrap extends React.Component {
  render() { 
    const {
      data,
      srcName,
      ...restProps
    } = this.props
    
    const fluidImg = data.allImageSharp.edges.map((image, index) => {
      const fileName = image.node.fluid.originalName.replace(/\.[^/.]+$/, "")
      if (fileName == srcName) {
        return (
          <Img
            fluid={image.node.fluid}
            alt={splitCamelCase(srcName)}
            key={index}
          />
        )  
      }
    })

    return (
      <React.Fragment>
        {fluidImg}
      </React.Fragment>
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
