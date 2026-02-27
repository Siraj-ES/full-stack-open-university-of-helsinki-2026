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
      <button onClick={props.handleClick}>{props.text}</button>
    </>
    
  )
}

const Statistics = (props) =>{
  const average = props.all === 0 ? 0: props.puntuation/props.all
  const positive = props.all ===0 ? 0: (props.good / props.all)*100
  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr><StatisticLine value = {props.good} text ="good"/></tr>
          <tr><StatisticLine value = {props.neutral} text ="neutral"/></tr>
          <tr><StatisticLine value = {props.bad} text ="bad"/></tr>
          <tr><StatisticLine value = {average} text ="average"/></tr>
          <tr><StatisticLine value = {`${positive}%`} text ="positive"/></tr> 
        </tbody>
      </table>
    </div>
    
  )
}


const Anecdotes = (props) =>{
  return(
  <>
    <h1>Anecdote of the day</h1>
    <p>{props.anecdotes}</p>
    
  </>
  )
}


const AnecdotesMax = (props) =>{
  const {text, votes} = props.anecdoteMax

  return(
    <>
      
      <h1>Anecdote with most votes</h1>
      <p>{text} has {votes} votes</p>
    </>
  )
}



const StatisticLine = (props) =>{
  return(
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </> 
    
  )
}

const Votes = (props) =>{
  return(
    <>
      <p>has {props.votes} votes</p>
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

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
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
  
  const randomly = () =>{
    let next = 0
    next = Math.floor(Math.random()*anecdotes.length)%anecdotes.length
    setSelected(next)
  }

  const handleVotes = () =>{
    
    let copy = [...votes]
    copy[selected] +=1
    setVotes(copy)

  }

  const handleMaxVote = ()=>{
    let copy = [...votes]
    let a = anecdotes[0]
    let max = 0
        copy.forEach((element, index) => {
          
          if(element>max){
            max = element
            a = anecdotes[index]
          }
        });
    return {text: a, votes: max}
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleClickGood}  text="good" />
      <Button handleClick = {handleClickNeutral}  text="neutral" />
      <Button handleClick = {handleClickBad}  text="bad" />
      <History good={good} neutral={neutral} bad={bad}
                  all = {all} puntuation={puntuation}/>

      <Anecdotes anecdotes={anecdotes[selected]}/>
      <Votes votes={votes[selected]}/>

      <Button handleClick = {randomly} text="anecdotes"/>  
      <Button handleClick = {handleVotes} text = "votes"/>   
       
      <AnecdotesMax anecdoteMax = {handleMaxVote()}/>
    </div>

    
    
  )
}

export default App