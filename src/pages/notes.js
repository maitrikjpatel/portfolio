import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/'
import Card from '../components/Card/'
import Bio from '../components/Bio'
import styles from "../utils/css/pages/Notes.module.css"

class NoteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Bio 
          title="Notes"
          description="Here's some of my front end development and UX notes"
        />
        <div className={styles.NotesWrapper}>
          {posts.map(({ node }) => {
            const category = get(node, 'frontmatter.category')
            const title = get(node, 'frontmatter.title') || node.fields.slug
            const topics = get(node, 'frontmatter.topics')
            const source = get(node, 'frontmatter.source')
            
              if(category == "note"){
                return (
                  <Card 
                    key={node.fields.slug}
                    title={title}

                    topics={topics}
                    link={node.fields.slug}
                    
                    source={source}
                  />
                )
              }
            })
          }
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
    allMarkdownRemark(sort: 
      { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { publish: { ne: "false" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            category
            title
            topics
            link
            source
          }
        }
      }
    }
  }
`
