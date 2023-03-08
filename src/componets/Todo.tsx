import { type TodoId, type Todo as todoTypes } from '../types'
interface Props extends todoTypes {
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
       <div className='view'>
            <input className='toggle'
                type={'checkbox'}
                onChange={() => {} }
            />
            <label>{title}</label>
            <button className='destroy'
                onClick={() => { onRemoveTodo({ id }) } }>
            </button>
       </div>
  )
}
