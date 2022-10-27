import React from 'react'
import { useLocation } from 'react-router-dom'
import Details from '../components/Details';

export default function PokeDetails() {
    const location = useLocation();
    const details = location.state;
  return (
    <div>
      <Details details = {details}/>
    </div>
  )
}
