import { React } from 'react';
import { useSelector } from 'react-redux'
import "./Tabla.css"

export function Tabla() {

    const personas = useSelector(state => (state.personas));

    return (
        <div >
            <table className='tabla'>
                <tbody >
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Carrera</th>
                        <th>Hobbie</th>
                    </tr>
                    {personas.map((persona) =>
                        <tr key={persona.edad+persona.nombre}>
                            <td>{persona.nombre}</td>
                            <td>{persona.edad}</td>
                            <td>{persona.carrera}</td>
                            <td>{persona.hobbie}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;