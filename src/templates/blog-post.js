import React from 'react'

import Helmet from 'react-helmet'

import { Link } from 'gatsby'
import get from 'lodash/get'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import WorkPostHeader from '../components/WorkPostHeader'
import BlogPostHeader from '../components/BlogPostHeader'

import styles from './blogPost.module.css';

class BlogPostTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext
    
    const post = this.props.data.markdownRemark
    
    const category = post.frontmatter.category
    const date = post.frontmatter.date
    const author = post.frontmatter.author     

    const title = post.frontmatter.title
    const description = post.frontmatter.description

    const role = post.frontmatter.role
    const tools = post.frontmatter.tools
    const link = post.frontmatter.link

    const postColor = post.frontmatter.postColor     
    const imageUrl = post.frontmatter.imageUrl

    let postHeaderData
    if(category === "work") {  
      postHeaderData = ( 
        <WorkPostHeader
          title={title}
          description={description}
          role={role}
          tools={tools}
          link={link}
          postColor={postColor}
          imageUrl={imageUrl.childImageSharp.fluid}
        />          
      )
    }
    else if(category === "note"){
      postHeaderData = ( 
        <BlogPostHeader
          title={title}
          description={description}
          role={role}
          date={date}
          author={author}
          postColor={postColor}
        />  
      )
    }

    const pagination = ( 
      <React.Fragment>
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
      </React.Fragment>       
    )
    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />

        {postHeaderData}

        <div 
          className={styles.markdownBody}
          dangerouslySetInnerHTML={{ __html: post.html }} 
        />

        {pagination}
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
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      id
      html
      frontmatter {
        author
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
