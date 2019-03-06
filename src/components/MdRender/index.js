import React from 'react'
import styles from './MdRender.module.css'
import PropTypes from 'prop-types'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

function MdRender(props) {
  const { mdxCodeBody, ...restProps } = props

  return (
    <div className={styles.markdownBody}>
      <MDXRenderer>{mdxCodeBody}</MDXRenderer>
    </div>
  )
}

MdRender.propTypes = {
  mdxCodeBody: PropTypes.string,
}

export default MdRender
