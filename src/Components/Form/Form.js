import React, { useState } from 'react'
import ErrorCard from '../ErrorCard'
import AnswerCard from '../AnswerCard'
import classes from './Form.module.scss'
export const Form = () => {
  const [values, setvalues] = useState({
    planet: 'Earth',
    objWeight: null,
    mass: null,
  })
  const [error, seterror] = useState('')
  const planetGravity = {
    Earth: 9.8,
    Jupiter: 24.79,
    Mars: 3.711,
    Mercury: 3.7,
    Moon: 1.62,
    Neptune: 11.15,
    Pluto: 0.62,
    Saturn: 10.44,
    Uranus: 8.69,
    Venus: 8.87,
  }
  const inputHandler = (event) => {
    const valuesCopy = { ...values }
    valuesCopy[event.target.name] = event.target.value
    setvalues(valuesCopy)
  }
  const submitAnswerHandler = (event) => {
    event.preventDefault()
    if (!values.objWeight) {
      seterror('Mass is required')
    } else {
      seterror('')
      const valuesCopy = { ...values }
      valuesCopy.mass = values.objWeight * planetGravity[values.planet]
      setvalues(valuesCopy)
    }
  }
  return (
    <>
      <form onSubmit={submitAnswerHandler}>
        <input
          type='number'
          name='objWeight'
          id='objWeight'
          placeholder='Enter Mass in kilograms'
          className={classes.objWeight}
          onChange={inputHandler}
        />
        <select
          onChange={inputHandler}
          id='planet'
          name='planet'
          size='1'
          className={classes.planet}
        >
          <option value='Earth'>Earth</option>
          <option value='Jupiter'>Jupiter</option>
          <option value='Mars'>Mars</option>
          <option value='Mercury'>Mercury</option>
          <option value='Moon'>Moon</option>
          <option value='Neptune'>Neptune</option>
          <option value='Pluto'>Pluto</option>
          <option value='Saturn'>Saturn</option>
          <option value='Uranus'>Uranus</option>
          <option value='Venus'>Venus</option>
        </select>
        <button type='submit' className={classes.submitWeightBtn}>
          Calculate Weight
        </button>
      </form>
      {error.length > 0 ? (
        <ErrorCard stringErr={error} />
      ) : (
        <AnswerCard values={values} />
      )}
    </>
  )
}
