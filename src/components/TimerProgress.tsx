// src/components/TimerProgress.tsx
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface Props {
  minutes: number
  seconds: number
  mode: 'pomodoro' | 'break'
}

export const TimerProgress: React.FC<Props> = ({ minutes, seconds, mode }) => {
  const totalSeconds = mode === 'pomodoro' ? 25 * 60 : 5 * 60
  const elapsedSeconds = minutes * 60 + seconds
  const percentage = (elapsedSeconds / totalSeconds) * 100

  const color = mode === 'pomodoro' ? '#E046D7' : '#3AB499'
  const colorTrail = mode === 'pomodoro' ? '#3D244A' : '#1C3A3E'

  return (
    <>
      <CircularProgressbar
        value={percentage}
        text={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          textSize: '24px',
          pathTransitionDuration: 0.5,
          pathColor: color,
          textColor: color,
          trailColor: colorTrail,
        })}
      />
    </>
  )
}
