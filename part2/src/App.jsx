import Note from './components/Note'
import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const addName = (event) =>{
    event.preventDefault()
    console.log('button clicked', event.target)
    setPersons(persons.concat({name:newName}))
    setNewName('')
  }

  const handleNewName = (event) => {
    console.log(event.target)
    setNewName(event.target.value)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map(element=>
          <p key={element.name}>{element.name}</p>
          
        )}
      </>
    </div>
  )
}


export default App