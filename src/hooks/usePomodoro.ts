import { useEffect, useState } from 'react'

export type TimerMode = 'pomodoro' | 'break'

export const usePomodoro = () => {
  const [mode, setMode] = useState<TimerMode>('pomodoro')
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [canPause, setCanPause] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            if (minutes === 0) {
              clearInterval(timer!)
              setIsRunning(false)
              setCanPause(false)
              return 0
            }
            setMinutes((prev) => prev - 1)
            return 59
          }
          return prevSeconds - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer!)
  }, [isRunning, minutes])

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true)
      setCanPause(true)
    }
  }

  const handlePause = () => {
    setIsRunning(false)
    setCanPause(false)
    if (mode === 'pomodoro') {
      setMode('break')
      setMinutes(5)
      setSeconds(0)
    } else {
      setMode('pomodoro')
      setMinutes(25)
      setSeconds(0)
    }
  }

  return {
    mode,
    minutes,
    seconds,
    isRunning,
    canPause,
    start: handleStart,
    pause: handlePause,
  }
}
