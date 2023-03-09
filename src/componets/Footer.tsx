import { Todos } from "./Todos"

export  con Footer: React.FC<props> = ( { 
    todos, 
    onClearCompleted} ) => {
    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong>Tareas Pendientes
            </span>

            <Filters
                filterSelected={}
                onFilterChange={()=>{}}
            />
        </footer>
    )
}