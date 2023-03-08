interface Todo {
  id: number
  title: string
  completed: boolean
}

type ListTodos = Todo[]

interface Props {
  todos: ListTodos
}

export const Todos: React.FC<Props> = ({ todos }) => {
  return (
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))
            }
        </ul>
  )
}
