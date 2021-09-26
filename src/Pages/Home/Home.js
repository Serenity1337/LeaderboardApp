import React, { useState } from 'react'
import Form from '../../Components/Form'
import Header from '../../Components/Header'
import Leaderboard from '../../Components/Leaderboard'
import classes from './Home.module.scss'

export const Home = () => {
  const [leaderboard, setLeaderboard] = useState([])
  return (
    <div>
      {/* 
    1) heading 
    2) form
    3) either render the answer card or the failed validation card  
    
    */}
      <Header />
      <Form leaderboard={leaderboard} setLeaderboard={setLeaderboard} />
      <Leaderboard leaderboard={leaderboard} setLeaderboard={setLeaderboard} />
    </div>
  )
}
