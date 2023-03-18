import { useState } from "react";
import "./App.css";
import TodoInput from "./componentes/TodoInput";
import TodoList from "./componentes/TodoList";


function App() {

const [tareas, setTareas] = useState([]);

const agregarTarea = (newTarea) => {
  console.log("Nueva tarea", newTarea)
  let nuevaTarea ={ id: tareas.length + 1, tarea: newTarea, completo: false }

  setTareas([...tareas, nuevaTarea]);
}

const marcarCompleto = (id) => {
    
  setTareas(
     tareas.map((tarea) => {
      return tarea.id === Number(id)
        ? { ...tarea, completo: !tarea.completo }
        : { ...tarea };
    })
  )
};

const borrarTarea = (id) => {
  setTareas([...tareas].filter((item) => item.id !== id))
};

return (
  <div className="container">
    <TodoInput agregarTarea={agregarTarea} />
    <TodoList
      tareas={tareas}
      marcarCompleto={marcarCompleto}
      borrarTarea={borrarTarea}
    />
      
    </div>
  );

}
export default App
