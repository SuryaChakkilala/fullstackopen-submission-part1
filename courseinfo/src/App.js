import './App.css';

const Part = ({name, exercises}) => (
  <div>
    <b>{name}</b> <br/>
    Exercises: {exercises}<br/>
  </div>
)

const Header = ({courseName}) => (
  <div>
    <h2>{courseName}</h2>
  </div>
)

const Content = ({parts}) => (
  <div>
    {parts.map(part=> <Part name={part.name} exercises={part.exercises} />)}
  </div>
)

const Total = ({total}) => (
  <div>
    <h2>Total: {total}</h2>
  </div>
)

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  const total = () => {
    let t=0
    parts.forEach((part) => t+=part.exercises)
    return t
  }
  return (
    <div className="App">
      <Header courseName={course} />
      <Content parts={parts} />
      <Total total={total()} />
    </div>
  );
}

export default App;
