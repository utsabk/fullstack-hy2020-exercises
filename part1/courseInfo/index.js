import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log('Header props',props)
  return <h1>{props.course.name}</h1>;
};

const Part = ({part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = (props) => {
  console.log("content's props", props.course);
  return (
    <>
      <Part part={props.course.parts[0].name} exercises={props.course.parts[0].exercises} />
      <Part part={props.course.parts[1].name} exercises={props.course.parts[1].exercises} />
      <Part part={props.course.parts[2].name} exercises={props.course.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
