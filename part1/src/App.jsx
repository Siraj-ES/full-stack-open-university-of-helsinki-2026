import { useState } from 'react'


const Button = (props) => {
  return(
    <>
      <button onClick={props.handleClick }>{props.text}</button>
    </>
    
  )
}



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [puntuation, setPuntuation] = useState(0)
  const numberOfClicks = good + neutral + bad

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
      

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {puntuation/numberOfClicks}</p>
      <p>positive {(good/numberOfClicks)*100}%</p>
    </div>
  )
}

export default App