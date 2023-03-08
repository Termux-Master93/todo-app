import { useState } from 'react'
import './App.css'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

const mockTodos = [
  {
    id: 2,
    title: 'todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  return (
    <Todos todos={todos}/>
  )
}
export default App
