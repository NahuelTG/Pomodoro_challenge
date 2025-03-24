import React from 'react'
import './StopPomodoro.css'

interface ButtonProps {
  onStop?: () => void
}

export const StopPomodoro: React.FC<ButtonProps> = ({ onStop }) => {
  return (
    <a className="stop" onClick={onStop}>
      Stop Pomodoro
    </a>
  )
}
