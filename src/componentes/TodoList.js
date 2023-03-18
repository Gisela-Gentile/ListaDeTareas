import TodoItem from './TodoItem'
import React from 'react'

 function TodoList({tareas, marcarCompleto, borrarTarea}) {

    return (
        <div>
           {
               tareas.map((item, index) =>(
                <TodoItem key={index + 1} tarea = {item} marcarCompleto= {marcarCompleto} borrarTarea = {borrarTarea}/>
               ))
           }
        </div>
    )
}
export default TodoList