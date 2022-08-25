import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Form() {

    const [input, setInput] = useState({
        nombre: "",
        edad: "",
        carrera: "",
        hobbie: "",
    })

    return (
        <div >
            <input name="nombre" type="text" placeholder="Nombre" />
            <input name="edad" type="num" placeholder="Edad" />
            <input name="carrera" type="text" placeholder="Carrera" />
            <input name="hobbie" type="text" placeholder="Hobbie" />
            <button type="submit">CREAR PERSONA</button>
        </div>
    );
}

export default Form;