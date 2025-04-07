import React from 'react'
import './TimerPomodoro.css'

interface Props {
  isRunning: boolean
  canPause: boolean
  mode: 'pomodoro' | 'break'
  onStart: () => void
  onPause: () => void
}

export const TimerControls: React.FC<Props> = ({ canPause, mode, onStart, onPause }) => {
  return (
    <div className="buttons">
      <a className="start" onClick={onStart}>
        {mode === 'pomodoro' ? 'Start Pomodoro' : 'Start Break'}
      </a>
      <a className={`stop ${canPause ? '' : 'inactive'}`} onClick={canPause ? onPause : undefined}>
        {mode === 'pomodoro' ? 'Pause Pomodoro' : 'Pause Break'}
      </a>
    </div>
  )
}
