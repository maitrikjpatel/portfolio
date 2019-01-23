import React from 'react'

import { StaticQuery, graphql } from "gatsby"
import { splitCamelCase } from '../../utilities/js'

import styles from './ImageWrapper.module.css'
import Img from 'gatsby-image'

class ImageWrap extends React.Component {
  render() { 
    const {
      data,
      srcName,
      ...restProps
    } = this.props

    var fluidSrc = data.allImageSharp.edges.find( function( image ){
      const fileName = image.node.fluid.originalName.replace(/\.[^/.]+$/, "")
      return fileName === srcName;
    })

    return (
      <Img
        className={styles.Image} 
        fluid={fluidSrc.node.fluid}
        alt={splitCamelCase(srcName)}
      />
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

// class ImageWrapper extends React.Component {
//   render() { 
//     const {
//       srcName,
//       ...restProps
//     } = this.props

//     const AllSingleImages = importAll(require.context('../../Assets/Images/SingleImages/', true, /\.(png|jpe?g|svg)$/));
    
//     return (
//       <div>
//         <img 
//           className={styles.Image} 
//           src={AllSingleImages[srcName.concat(".png")]} 
//           alt={splitCamelCase(srcName)}
//         />
//       </div>
//     )
//   }
// }

// ImageWrapper.propTypes = {
//   srcName: PropTypes.string.isRequired,
// }

// export default ImageWrapper
