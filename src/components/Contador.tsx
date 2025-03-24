import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { StartPomodoro } from './StartPomodoro'
import { StopPomodoro } from './StopPomodoro'
import './Contador.css'

export const Contador: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(25)
  const [isRunning, setIsRunning] = useState<boolean>(false)

  useEffect(() => {
    let timer: any
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (minutes === 0) {
              clearInterval(timer)
              return 0
            }
            setMinutes((prevMinutes) => prevMinutes - 1)
            return 59
          }
          return prevSeconds - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning, minutes])

  const totalSeconds = 25 * 60
  const elapsedSeconds = minutes * 60 + seconds
  const percentage = (elapsedSeconds / totalSeconds) * 100

  return (
    <div className="contador">
      <div className="contador__progress">
        <CircularProgressbar
          value={percentage}
          text={`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '24px',
            pathTransitionDuration: 0.5,
            pathColor: `#E046D7`,
            textColor: '#E046D7',
            trailColor: '#E046D7',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>

      <StartPomodoro onStart={() => setIsRunning(true)} />
      <StopPomodoro onStop={() => setIsRunning(false)} />
    </div>
  )
}
