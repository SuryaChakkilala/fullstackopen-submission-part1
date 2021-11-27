import React, {useState} from 'react'
import './App.css';

const Row = ({name, value}) =>( 
  <tr>
    <td>
      {name}
    </td>
    <td align="right">
      {value}
    </td>
  </tr>
)

const Statistics = (props) => {
  const {good, neutral, bad} = props
  let all = good+neutral+bad
  let average = (good-bad)/all
  let positive = good*100/all
  return (
    <div>
        <h3>Statistics</h3>
        <center>
          <table>
            <tbody>
              <Row name="Good" value={good} />
              <Row name="Neutral" value={neutral} />
              <Row name="Bad" value={bad} />
              <Row name="All" value={all} />
              <Row name="Average" value={average} />
              <Row name="Positive" value={positive} />
            </tbody>
          </table>
        </center>
    </div>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="App">
      <h3>Give Feedback:</h3>
      <button onClick={()=>{setGood(good+1)}}>Good</button>
      <button onClick={()=>{setNeutral(neutral+1)}}>Neutral</button>
      <button onClick={()=>{setBad(bad+1)}}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
