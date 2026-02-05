import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const calcBmi = (e) => {
    e.preventDefault()

    const w = parseFloat(weight)
    const h = parseFloat(height)

    if (!w || !h || w <= 0 || h <= 0) {
      alert('Please enter a valid weight and height')
      return
    }

    const bmiValue = (w / ((h / 100) * (h / 100))).toFixed(1)
    setBmi(bmiValue)

    if (bmiValue < 18.5) {
      setMessage('You are underweight')
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('You are a healthy weight')
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are overweight')
    } else {
      setMessage('You are obese')
    }
  }

  const reload = () => {
    setWeight('')
    setHeight('')
    setBmi('')
    setMessage('')
  }

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>

        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg):</label>
            <input
              type="text"
              placeholder="Enter weight in kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label>Height (cm):</label>
            <input
              type="text"
              placeholder="Enter height in cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <button className="btn" type="submit">
            Calculate
          </button>

          <button
            className="btn btn-outline"
            type="button"
            onClick={reload}
          >
            Reset
          </button>
        </form>

        {bmi && (
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
