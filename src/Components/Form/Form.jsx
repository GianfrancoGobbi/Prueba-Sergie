import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarPersona } from '../../redux/actions/index';
import { useNavigate } from "react-router-dom";
import "./Form.css"

export function Form() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        nombre: "",
        edad: "",
        carrera: "",
        hobbie: "",
    })

    const [boton, setBoton] = useState("CREAR PERSONA")

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(agregarPersona(input))
        setBoton("PERSONA CREADA")
        setTimeout(() => {
            navigate("/tabla");
          }, 1000);
        }

    return (
        <div >
            <form className='form' onSubmit={handleSubmit}>
                <input className='form-input' required name="nombre" type="text" placeholder="Nombre" onChange={handleInputChange} />
                <input className='form-input' required name="edad" type="num" placeholder="Edad" onChange={handleInputChange} />
                <input className='form-input' required name="carrera" type="text" placeholder="Carrera" onChange={handleInputChange} />
                <input className='form-input' required name="hobbie" type="text" placeholder="Hobbie" onChange={handleInputChange} />
                <button className='form-button' type="submit">{boton}</button>
            </form>
        </div>
    );
}

export default Form;