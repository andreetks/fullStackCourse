import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const changeGood = () => {
    setGood(good + 1)
  }
  const changeNeutral = () => {
    setNeutral(neutral + 1)
  }
  const changeBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div style={{display: 'flex'}}>
        <button onClick={changeGood}>Good</button>
        <button onClick={changeNeutral}>Neutral</button>
        <button onClick={changeBad}>Bad</button>
      </div>
      <div>
        <h1>Statistic</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>

    </div>
  )
}

export default App;
