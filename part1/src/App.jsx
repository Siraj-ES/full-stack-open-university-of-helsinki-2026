import { useState } from 'react'

const History = (props) =>{
  if(props.all==0){
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }
  return(
  <Statistics good={props.good} neutral={props.neutral} bad={props.bad}
              all = {props.all} puntuation={props.puntuation}/>
  )
}


const Button = (props) => {
  return(
    <>
      <button onClick={props.handleClick }>{props.text}</button>
    </>
    
  )
}

const Statistics = (props) =>{
  const average = props.all === 0 ? 0: props.puntuation/props.all
  const positive = props.all ===0 ? 0: (props.good / props.all)*100
  return(
    <>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.good+props.neutral+props.bad}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  )
  

}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [puntuation, setPuntuation] = useState(0)
  const all = good + neutral + bad
  
  const handleClickGood = () =>{
    setGood(good+1)
    setPuntuation(puntuation+1)
  }

  const handleClickNeutral = () =>{
    setNeutral(neutral+1)
    
  }

  const handleClickBad = () =>{
    setBad(bad+1)
    setPuntuation(puntuation-1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleClickGood}  text="good" />
      <Button handleClick = {handleClickNeutral}  text="neutral" />
      <Button handleClick = {handleClickBad}  text="bad" />
      <History good={good} neutral={neutral} bad={bad}
                  all = {all} puntuation={puntuation}/>
    </div>
    
  )
}

export default App