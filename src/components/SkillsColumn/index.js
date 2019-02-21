import React from 'react'
import PropTypes from 'prop-types'
import styles from './SkillsColumn.module.css'

function SkillsColumn(props) {
  const { items, ...restProps } = props

  const itemsList = items.map(item => <p key={item.toString()}>{item}</p>)

  return <div className={styles.SkillsColumn}>{itemsList}</div>
}

SkillsColumn.propTypes = {
  items: PropTypes.array,
}

SkillsColumn.defaultProps = {
  items: null,
}

export default SkillsColumn
