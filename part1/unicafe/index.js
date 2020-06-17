import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => {
  if (isNaN(value)) {
    value = 0;
  }
  return (
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + neutral + bad;
  if (total <= 0) {
    return <p> No feedback given</p>;
  }
  return (
    <table>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={total} />
      <Statistic text="average" value={(good - bad) / total} />
      <Statistic text="positive" value={good / total} />
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClicks = (e) => {
    const text = e.target.innerText;
    if (text === 'good') {
      setGood(good + 1);
    } else if (text === 'neutral') {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={handleClicks} text="good" />
      <Button onClick={handleClicks} text="neutral" />
      <Button onClick={handleClicks} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
