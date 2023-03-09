import { type ListOfTodos, type TodoId, type Todo as todotype } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos
  onToggleCompleteTodo: ({ id, completed }: Pick<todotype, 'id' | 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
        <ul className='todo-list'>
            {
                todos.map(todo => (
                    <li key={todo.id}
                      className={`${todo.completed ? 'completed' : ''}`}
                    >
                        <Todo
                          key={todo.id}
                          id={todo.id}
                          title={todo.title}
                          completed={todo.completed}
                          onToggleCompleteTodo = { onToggleCompleteTodo }
                          onRemoveTodo = { onRemoveTodo }
                        />
                    </li>
                ))
            }
        </ul>
  )
}
