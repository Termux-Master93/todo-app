import { useState } from 'react'
import './App.css'
import { Todos } from './componets/Todos'
import { type TodoId, type Todo as TodoType } from './types'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type

const mockTodos = [
  {
    id: 1,
    title: 'todo 1',
    completed: true
  },
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
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    
  }
  return (
    <div className='todoapp'>
      <Todos
      todos={todos}
      onRemoveTodo={handleRemove} // funcion para eliminar el todo
      />
    </div>
  )
}
export default App
