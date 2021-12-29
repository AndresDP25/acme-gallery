import React from 'react'
import { logo, Hamburguer } from "../../assets/illustrations";
import  './Nav.scss';

function Nav() {
    return (
        <div className='Nav container'>
            <img src={logo} alt="logo" className='logo' />
            <button className='btn'>LOGIN</button>
            <img src={Hamburguer} className="imgHambur" alt="" />
        </div>
    )
}

export default Nav
