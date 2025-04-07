import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import type { TimerMode } from '../hooks/usePomodoro'

interface Props {
  minutes: number
  seconds: number
  mode: TimerMode
}

export const TimerProgress: React.FC<Props> = ({ minutes, seconds, mode }) => {
  const totalSeconds = mode === 'pomodoro' ? 25 * 60 : 5 * 60
  const elapsedSeconds = minutes * 60 + seconds
  const percentage = (elapsedSeconds / totalSeconds) * 100

  const color = mode === 'pomodoro' ? '#E046D7' : '#3AB499'

  return (
    <div className="contador__progress">
      <CircularProgressbar
        value={percentage}
        text={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        styles={buildStyles({
          textSize: '24px',
          pathTransitionDuration: 0.5,
          pathColor: color,
          textColor: color,
          trailColor: color,
        })}
      />
    </div>
  )
}
