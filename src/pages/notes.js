import React from 'react'

import get from 'lodash/get'
import Layout from '../components/Layout/'
import Card from '../components/Card/'

class NoteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <div className="resizeContainer">
          <h1 style={{textAlign: 'center'}}>Notes</h1>
          <div className="flexbox">
            {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                const category = get(node, 'frontmatter.category')
                const publish = get(node, 'frontmatter.publish')
                const tags = get(node, 'frontmatter.tags')
                
                if(category == "note" && publish == "true"){
                  return (
                    <Card 
                      key={node.fields.slug}
                      title={title}
                      link={node.fields.slug}
                      role={tags}
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

export default NoteIndex

export const noteQuery = graphql`
  query NoteIndexQuery {
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
            tags
          }
        }
      }
    }
  }
`
