import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({ anecdote, vote }) => {
  return (
    <>
      <p>{anecdote}</p>
      {vote > 1 ? <p>Has {vote} votes </p> : <p>Has {vote} vote </p>}
    </>
  );
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(Array(6).fill(0));

  const randomize = (max) => {
    const randomNum = Math.floor(Math.random() * max);
    setSelected(randomNum);
  };

  const handleVote = (index) => {
    const copy = [...votes];
    copy[index] += 1;
    setVotes(copy);
  };

  const maxVote = Math.max(...votes);
  const maxVoteIndex = votes.indexOf(maxVote);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={() => handleVote(selected)} text="vote" />
      <Button onClick={() => randomize(6)} text="next anecdote" />
      {maxVote !== 0 ? (
        <>
          <h1>Anecdote with most views</h1>
          <Anecdote anecdote={anecdotes[maxVoteIndex]} vote={maxVote} />
        </>
      ) : (
        ''
      )}
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
