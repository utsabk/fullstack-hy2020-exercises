import React from 'react';

const Header = ({ name }) => {
  console.log('Header props', name);
  return <h2>{name}</h2>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    console.log('p', p.exercises);
    return s + p.exercises;
  }, 0);
  return <h4>total of {total} exercises</h4>;
};

const Course = ({ course }) => {
  console.log('Course:-', course);
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
