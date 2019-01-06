import React from 'react'

import Helmet from 'react-helmet'
import Img from "gatsby-image"

import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from '../Layout'
import PostHeader from '../PostHeader'

import styles from './blogPost.module.css';
import MdRender from '../MdRender';

class BlogPostTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteAuthor = get(this.props, 'data.site.siteMetadata.author')
    const { previous, next } = this.props.pageContext
    
    const post = this.props.data.mdx
    
    const category = post.frontmatter.category
    const date = post.frontmatter.date
    const author = post.frontmatter.author || siteAuthor

    const title = post.frontmatter.title
    const description = post.frontmatter.description

    const role = post.frontmatter.role
    const topics = post.frontmatter.topics
    const tools = post.frontmatter.tools
    const link = post.frontmatter.link

    const postColor = post.frontmatter.postColor     
    const imageUrl = post.frontmatter.imageUrl

    let postHeader
    if(category === "work") {  
      postHeader = ( 
        <PostHeader
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
      postHeader = ( 
        <PostHeader
          title={title}
          description={description}
          topics={topics}
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
        
        {postHeader}

        <MdRender md2html={post.html} />

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
    mdx(
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
        topics
        link
        imageUrl {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        postColor
      }
    }
  }
`
