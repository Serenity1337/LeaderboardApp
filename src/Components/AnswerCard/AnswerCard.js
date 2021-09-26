import React from 'react'
import classes from './AnswerCard.module.scss'
import {
  Earth,
  Jupiter,
  Mars,
  Mercury,
  Moon,
  Neptune,
  Pluto,
  Saturn,
  Uranus,
  Venus,
} from '../../Utils/images'
export const AnswerCard = (props) => {
  const imgs = {
    Earth,
    Jupiter,
    Mars,
    Mercury,
    Moon,
    Neptune,
    Pluto,
    Saturn,
    Uranus,
    Venus,
  }
  console.log(props.values.mass)
  return (
    <div className={classes.card}>
      <img
        className={classes.planet}
        src={`${imgs[props.values.planet]}`}
        alt=''
      />
      {props.values.mass ? (
        <div className={classes.informationCard}>
          <h1>
            The weight of the object on <span>{props.values.planet}</span>
          </h1>
          <div className={classes.mass}>{props.values.mass} N</div>
        </div>
      ) : null}
    </div>
  )
}
