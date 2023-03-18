import React, { useState } from 'react'

export default function TodoInput({ agregarTarea }) {

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            agregarTarea(input);
            setInput('');
        }
    }

    return (
        <div style={{ margin: 20 }}>
            <h2>Mi lista de tareas</h2>
            <form onSubmit={handleSubmit}>
                <input className='texto' type="text" value={input} onChange={handleChange} />
                <button type='submit' className='boton-agregar'>Agregar tarea</button>
            </form>
        </div>
    )
}