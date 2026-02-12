const Part = (props) =>{
  console.log(props)
  return(
    <>
      <p>{props.part} {props.ex}</p>
    </>
  )

}


const Header = (props) => {

  return(
    <>
      <h1>{props.course}</h1>
    </>
    
  )
}


const Content = (props) => {
  
  return(
    <>
      {props.parts.map(element =>
        <Part key={element.name} part = {element.name} ex = {element.exercises}/>
      )

      }
      
     
    </>

  )
}

const Total = (props) => {
  var totalNumber = 0;
  props.parts.map(element => totalNumber += element.exercises)
  return(
  <>
    <p>Number of exercises {totalNumber}</p>
  </>
  )
  
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
      
    </>
  )
}

export default App