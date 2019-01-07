import React from 'react'
import PropTypes from 'prop-types'
import styles from './GridColumnsLayout.module.css'

function GridColumnsLayout(props) {
  const { items, ...restProps } = props

  const itemsList = items.map(item => <p key={item.toString()}>{item}</p>)

  return <div className={styles.GridColumnsLayout}>{itemsList}</div>
}

GridColumnsLayout.propTypes = {
  items: PropTypes.array,
}

GridColumnsLayout.defaultProps = {
  items: null,
}

export default GridColumnsLayout
