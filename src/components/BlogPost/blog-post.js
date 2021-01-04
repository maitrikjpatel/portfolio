import React from 'react'

import SEO from '../SEO'

import { Link } from 'gatsby'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Layout from '../Layout'
import PostHeader from '../PostHeader'

import styles from './blogPost.module.css'
import MdRender from '../MdRender'

import siteImage from '../../Assets/siteImage.png'

class BlogPostTemplate extends React.Component {
  render() {
    const siteAuthor = get(this.props, 'data.site.siteMetadata.author')

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
    const ogImage = post.frontmatter.ogImageUrl 
      ? post.frontmatter.ogImageUrl.childImageSharp.fluid.src 
      : imageUrl ? imageUrl : siteImage
    
    let postHeader
    if (category === 'work') {
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
    } else if (category === 'note') {
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
    
    const allWork = (
      <React.Fragment>
        <hr className={styles.pageHr} />
        <div className={styles.allWork}>
          {(category === 'note') && (
            <Link to="/notes/">
              ← Back to all Notes
            </Link>
          )}
          {(category === 'work') && (
            <Link to="/">
              ← Back to all Work
            </Link>
          )}
        </div>
      </React.Fragment>
    )
    
    return (
      <Layout location={this.props.location}>
        <SEO 
          titleText={title} 
          ogImage={ogImage}
        />

        {postHeader}

        <MdRender mdxCodeBody={post.code.body} />

        {allWork}
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
    mdx(fields: { slug: { eq: $slug } }) {
      id
      code {
        body
      }
      frontmatter {
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
        ogImageUrl {
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
