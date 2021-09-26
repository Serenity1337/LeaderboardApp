import React from 'react'
import classes from './Leaderboard.module.scss'
export const Leaderboard = (props) => {
  console.log(props.leaderboard)
  return (
    <div className={classes.leaderboard}>
      {props.leaderboard
        ? props.leaderboard.map((player, index) => (
            <div className={classes.playerCard}>
              <div className={classes.informationCard}>
                <div className={classes.playerName}>
                  {player.firstName} {player.lastName}
                </div>
                <div className={classes.date}>Jan 30, 2020 01:09</div>
              </div>
              <div className={classes.country}>{player.country}</div>
              <div className={classes.points}> {player.points}</div>
              <div className={classes.buttonContainer}>
                <button className={classes.deletePlayer}> del </button>
                <button className={classes.addFivePoints}> +5 </button>
                <button className={classes.removeFivePoints}> -5 </button>
              </div>
            </div>
          ))
        : null}
    </div>
  )
}
