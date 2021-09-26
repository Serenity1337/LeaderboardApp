import React from 'react'
import classes from './ErrorCard.module.scss'
export const ErrorCard = (props) => {
  return (
    <div className={classes.errorContainer}>
      <div className={classes.errorMsg}>{props.stringErr}</div>
    </div>
  )
}
