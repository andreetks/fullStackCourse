import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistic</h1>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No Feedback given</p>
      ) : (
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {good + neutral + bad}</p>
          <p>average {(good - bad) / (good + neutral + bad)} </p>
          <p>positive {(good * 100) / (good + neutral + bad)}%</p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const changeGood = () => {
    setGood(good + 1);
  };
  const changeNeutral = () => {
    setNeutral(neutral + 1);
  };
  const changeBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div style={{ display: "flex" }}>
        <button onClick={changeGood}>Good</button>
        <button onClick={changeNeutral}>Neutral</button>
        <button onClick={changeBad}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
