import React from 'react'
import classes from './Leaderboard.module.scss'
export const Leaderboard = (props) => {
  const deletePlayerFromLeaderboard = (leaderboard, index) => {
    const leaderboardCopy = [...leaderboard]
    leaderboardCopy.splice(index, 1)
    props.setLeaderboard(leaderboardCopy)
  }
  const addFivePoints = (leaderboard, player, index) => {
    const leaderboardCopy = [...leaderboard]
    const playerCopy = { ...player }

    playerCopy.points += 5
    leaderboardCopy[index] = playerCopy
    leaderboardCopy.sort((a, b) => b.points - a.points)
    props.setLeaderboard(leaderboardCopy)
  }

  const subtractFivePoints = (leaderboard, player, index) => {
    const leaderboardCopy = [...leaderboard]
    const playerCopy = { ...player }

    playerCopy.points -= 5
    leaderboardCopy[index] = playerCopy
    leaderboardCopy.sort((a, b) => b.points - a.points)
    props.setLeaderboard(leaderboardCopy)
  }
  return (
    <div className={classes.leaderboard}>
      {props.leaderboard
        ? props.leaderboard.map((player, index) => (
            <div className={classes.playerCard}>
              <div className={classes.informationCard}>
                <div className={classes.playerName}>
                  {player.firstName} {player.lastName}
                </div>
                <div className={classes.date}>{player.date}</div>
              </div>
              <div className={classes.country}>{player.country}</div>
              <div className={classes.points}> {player.points}</div>
              <div className={classes.buttonContainer}>
                <button
                  className={classes.deletePlayer}
                  onClick={() =>
                    deletePlayerFromLeaderboard(props.leaderboard, index)
                  }
                >
                  del
                </button>
                <button
                  className={classes.addFivePoints}
                  onClick={() =>
                    addFivePoints(props.leaderboard, player, index)
                  }
                >
                  {' '}
                  +5{' '}
                </button>
                <button
                  className={classes.removeFivePoints}
                  onClick={() =>
                    subtractFivePoints(props.leaderboard, player, index)
                  }
                >
                  {' '}
                  -5{' '}
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  )
}
