
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
  
   const total = props.parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0) 
  
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


export default Course