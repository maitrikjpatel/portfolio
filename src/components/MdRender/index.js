import React from 'react'
import styles from "./MdRender.module.css"
import PropTypes from 'prop-types'

function MdRender(props) {
  const {
    md2html,
    ...restProps
  } = props

  console.log(md2html);
  return (
    <div 
        className={styles.markdownBody}
        dangerouslySetInnerHTML={{ __html: md2html }} 
    />
  )
}

MdRender.propTypes = {
    md2html: PropTypes.node,
}

export default MdRender
