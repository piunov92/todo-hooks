import { useEffect, useState } from 'react'
import './TimeForm.scss'

function TimeForm({ className, setTime, isSubmitTaskInput }) {
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  console.log(isSubmitTaskInput)

  useEffect(() => {
    if (isSubmitTaskInput) {
      setMinutes('')
      setSeconds('')
      setTime((t) => ({ ...t, min: 0 }))
      setTime((t) => ({ ...t, sec: 0 }))
    }
  }, [isSubmitTaskInput, setTime])

  const handleMin = (e) => {
    setMinutes(e.target.value)
    if (!e.target.value.match('^[0-9]\\d*$')) {
      setTime((t) => ({ ...t, min: 0 }))
    } else {
      setTime((t) => ({ ...t, min: Number(e.target.value) * 60 }))
    }
  }

  const handleSec = (e) => {
    setSeconds(e.target.value)
    if (!e.target.value.match('^[0-9]\\d*$')) {
      setTime((t) => ({ ...t, sec: 0 }))
    } else {
      setTime((t) => ({ ...t, sec: Number(e.target.value) }))
    }
  }

  return (
    <form className='time'>
      <input
        className={`${className}`}
        name='min'
        value={minutes}
        onChange={(e) => handleMin(e)}
        placeholder='Min'
        pattern={'^[0-9]\\d*$'}
        maxLength='4'
      />
      <input
        className={className}
        name='sec'
        value={seconds}
        onChange={(e) => handleSec(e)}
        placeholder='Sec'
        pattern={'^[0-9]\\d*$'}
        maxLength='2'
      />
    </form>
  )
}

export default TimeForm
