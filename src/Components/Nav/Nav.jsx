import { React } from 'react';
import { NavLink } from 'react-router-dom';

export function Nav() {
    return (
        <div >
            <NavLink to={"/form"}>
                <button>Form</button>
            </NavLink>
            <NavLink to={"/tabla "}>
                <button>Tabla</button>
            </NavLink>
       
        </div>
    );
}

export default Nav;