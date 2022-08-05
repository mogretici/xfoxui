import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return (
    <div className={styles.container}>
      <button
        className={props.type ? styles[props.type] : styles.primary}
        {...props}
      >
        {props.text}
      </button>
    </div>
  )
}
