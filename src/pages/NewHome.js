import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NewHome() {
  return (
    <div class="ocean">
    <div className='newbanner'>
        <div className='newbanner-content'>
            <div style={{margin:"2.5rem"}}><h1>Welcome to PokeComm</h1></div>
            <NavLink to={'/register'}><div><button style={{width:"15rem"}} className='btn btn-primary'>Get Started</button></div></NavLink>
        </div>
      </div>
    <div class="bubble bubble--1"></div>
    <div class="bubble bubble--2"></div>
    <div class="bubble bubble--3"></div>
    <div class="bubble bubble--4"></div>
    <div class="bubble bubble--5"></div>
    <div class="bubble bubble--6"></div>
    <div class="bubble bubble--7"></div>
    <div class="bubble bubble--8"></div>
    <div class="bubble bubble--9"></div>
    <div class="bubble bubble--10"></div>
    <div class="bubble bubble--11"></div>
    <div class="bubble bubble--12"></div>
    <div id="octocat"></div>
  </div>


  )
}
