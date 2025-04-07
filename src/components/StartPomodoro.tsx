import React from 'react'
import './StartPomodoro.css'

interface ButtonProps {
  onStart?: () => void
}

export const StartPomodoro: React.FC<ButtonProps> = ({ onStart }) => {
  return (
    <a className="start" onClick={onStart}>
      Start Pomodoro
    </a>
  )
}
