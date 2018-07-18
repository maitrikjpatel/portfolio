import React from 'react'

import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import Layout from '../components/Layout/'
import Card from '../components/Card/'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
      return (
        <Layout location={this.props.location}>
          <Helmet title={siteTitle} />
          <div className="resizeContainer">
            <Bio />
            <div className="flexbox">
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                const category = get(node, 'frontmatter.category')
                const publish = get(node, 'frontmatter.publish')
                const role = get(node, 'frontmatter.role')

                if(category == "work" && publish == "true"){
                  return (
                    <Card
                      key={node.fields.slug}
                      title={title}
                      link={node.fields.slug}
                      role={role}
                    />
                  )
                }
              })
            }
          </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            category
            publish
            role
          }
        }
      }
    }
  }
`
