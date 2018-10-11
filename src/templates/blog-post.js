import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'
import Img from "gatsby-image"
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import { rhythm, scale } from '../utils/typography'
import styles from './blogPost.module.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      
        <div>
          {post.frontmatter.title && <PageTitle text={post.frontmatter.title} /> }
          {post.frontmatter.date && <p className={styles.pageHeaderDate} >{post.frontmatter.date}</p> }
          {post.frontmatter.category && <p className={styles.pageCategory} >{post.frontmatter.category}</p> }
          {post.frontmatter.description && <p className={styles.pageDescription} >{post.frontmatter.description}</p> }
          {post.frontmatter.role && <p className={styles.pageRole} >{post.frontmatter.role}</p> }
          {post.frontmatter.tools && <p className={styles.pageTools} >{post.frontmatter.tools}</p> }
          {post.frontmatter.link && <p className={styles.pageLink} >{post.frontmatter.link}</p> }
          {post.frontmatter.postColor && <p className={styles.pagePostColor} >{post.frontmatter.postColor}</p> }
          {post.frontmatter.imageUrl && 
            <Img 
              className={styles.pageImage} 
              fluid={post.frontmatter.imageUrl.childImageSharp.fluid}
            />
          }
        </div>

        <div 
          className={styles.markdownBody}
          dangerouslySetInnerHTML={{ __html: post.html }} 
        />

        <hr className={styles.pageHr} />
        <ul className={styles.pagePagination}>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        category
        title
        description
        role
        tools
        link
        imageUrl {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        postColor
      }
    }
  }
`
