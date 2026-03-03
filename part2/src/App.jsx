//import { useState } from "react"


const Course = (props) =>{
  return(
    <>
      <Header name = {props.course.name}/>
      <Content parts = {props.course.parts}/>
    </>
  )
}


const Header = (props) =>{
  return(
    <>
      <h1>{props.name}</h1>
    </>

  )
}


const Content = (props) =>{
  
  let total = 0
  props.parts.forEach(element => {
    total+=element.exercises
  });
  
  return(
    <>
      <ul>
        {props.parts.map(element => {
          
          return <Part name = {element.name} exercises = {element.exercises}
                key = {element.id}/>
          })
          
        }
        <p>total of {total} exercises </p>
      </ul>
    </>
  )
}

const Part = (props) =>{
  return(
    <li>{props.name} {props.exercises}</li>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return( 
    <Course course={course} />
  )
}

export default App