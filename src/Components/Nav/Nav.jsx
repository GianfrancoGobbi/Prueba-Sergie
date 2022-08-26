import { React } from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

export function Nav() {
    return (
        <div >
            <NavLink to={"/form"}>
                <button className='nav-boton'>FORM</button>
            </NavLink>
            <NavLink to={"/tabla "}>
                <button className='nav-boton'>TABLA</button>
            </NavLink>
       
        </div>
    );
}

export default Nav;