import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
export default function Navbar() {


  return (
    <>
      <header>
        <nav className="navbar ">
          <NavLink className="navbar-brand" to='/'><span>Poke-Comm</span></NavLink>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <NavLink className="nav-link" to="/allpokemons"><button className = 'btn btn-primary'><span>Login / PokeDex</span></button></NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
