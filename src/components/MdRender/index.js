import React from 'react'
import styles from './MdRender.module.css'
import PropTypes from 'prop-types'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

function MdRender(props) {
  const { mdxCodeBody, ...restProps } = props

  return (
    <MDXRenderer className={styles.markdownBody}>{mdxCodeBody}</MDXRenderer>
  )
}

MdRender.propTypes = {
  mdxCodeBody: PropTypes.string,
}

export default MdRender
