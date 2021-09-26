import React, { useState } from 'react'
import ErrorCard from '../ErrorCard'
import AnswerCard from '../Leaderboard'
import classes from './Form.module.scss'
import dateFormat from 'dateformat'
export const Form = (props) => {
  let now = new Date()
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    country: '',
    points: null,
    date: '',
    errors: '',
  })
  const [error, seterror] = useState('')
  const inputHandler = (event) => {
    const valuesCopy = { ...values }
    valuesCopy[event.target.name] = event.target.value
    setValues(valuesCopy)
  }
  const submitAnswerHandler = (event) => {
    event.preventDefault()
    if (
      !values.firstName ||
      !values.lastName ||
      !values.country ||
      !values.points
    ) {
      const valuesCopy = { ...values }
      valuesCopy.errors = 'All fields are required.'
      setValues(valuesCopy)
    } else {
      let currDate = dateFormat(now, 'mm/dd/yyyy hh:MM TT')
      const valuesCopy = { ...values }
      const profile = { ...values }
      profile.date = currDate
      let pointsCopy = Number(profile.points)
      profile.points = pointsCopy
      delete profile.errors
      const leaderboardCopy = [...props.leaderboard, profile]
      const sortedLeaderboard = leaderboardCopy.sort(
        (a, b) => b.points - a.points
      )
      valuesCopy.errors = ''

      setValues(valuesCopy)
      props.setLeaderboard(sortedLeaderboard)
      for (let index = 0; index < event.target.length; index++) {
        if (event.target[index].value) {
          event.target[index].value = ''
        }
      }
    }
  }
  return (
    <>
      <form onSubmit={submitAnswerHandler}>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='First Name'
          className={classes.firstName}
          onChange={inputHandler}
        />
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          className={classes.lastName}
          onChange={inputHandler}
        />
        <input
          type='text'
          name='country'
          id='country'
          placeholder='Country'
          className={classes.country}
          onChange={inputHandler}
        />
        <input
          type='number'
          name='points'
          id='points'
          placeholder='Player Points'
          className={classes.points}
          onChange={inputHandler}
        />

        <button type='submit' className={classes.submitWeightBtn}>
          Add Player
        </button>
      </form>
      {values.errors ? <ErrorCard stringErr={values.errors} /> : null}
    </>
  )
}
