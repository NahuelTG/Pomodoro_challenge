import React from 'react'
import { usePomodoro } from '../hooks/usePomodoro'
import { TimerControls } from './TimerControls'
import { TimerProgress } from './TimerProgress'
import './Contador.css'

export const Contador: React.FC = () => {
  const { minutes, seconds, mode, isRunning, canPause, start, pause } = usePomodoro()

  return (
    <div className="contador">
      <TimerProgress minutes={minutes} seconds={seconds} mode={mode} />
      <TimerControls isRunning={isRunning} canPause={canPause} mode={mode} onStart={start} onPause={pause} />
    </div>
  )
}
