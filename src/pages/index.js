import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

import Bio from '../components/Bio'
import Layout from '../components/Layout/'
import Card from '../components/Card/'
import styles from '../utilities/css/pages/Work.module.css'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMdx.edges')
    return (
      <Layout location={this.props.location}>
        <SEO />
        <Bio
          titleName="Hi, I'm Maitrik."
          title="As a Design Technologist, I design and develop pixel perfect user interfaces and experiences."
          description="Here are some of my selected projects"
        />
        <div className={styles.WorkWrapper}>
          {posts.map(({ node }) => {
            const category = get(node, 'frontmatter.category')
            const title = get(node, 'frontmatter.title') || node.fields.slug
            const role = get(node, 'frontmatter.role')
            const postColor = get(node, 'frontmatter.postColor')
            const imageUrl = get(
              node,
              'frontmatter.cardImageUrl.childImageSharp.fluid'
            )

            if (category == 'work') {
              return (
                <Card
                  key={node.fields.slug}
                  title={title}
                  role={role}
                  link={node.fields.slug}
                  imageUrl={imageUrl}
                  postColor={postColor}
                />
              )
            }
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { publish: { ne: "false" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            category
            title
            role
            link
            postColor
            cardImageUrl {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
