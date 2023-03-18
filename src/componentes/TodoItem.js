import React from "react";

const TodoItem = ({ tarea, marcarCompleto, borrarTarea }) => {
  const estilo = () => {
    return {       
      textDecoration: tarea.completo ? "line-through" : "none",
      margin: "20px",
      border: "2px solid #ffffff",
      backgroundColor:' #eb7ada',
    };
  };

  return (
    <div style={estilo()}>
      <input 
        type="checkbox"
        checked={tarea.completo}
        onChange={() => marcarCompleto(tarea.id)}
      />{" "}
      {tarea.tarea}
      <button className="boton" onClick={() => borrarTarea(tarea.id)}>X</button>
    </div>
  );
};

export default TodoItem;