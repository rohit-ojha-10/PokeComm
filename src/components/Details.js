import React, { useState } from 'react';
import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2'
import Chart from './Chart';
import Moves from './Moves';
export default function Details({details}) {
  const labels = details.stats.map((it) => it.base_stat)
console.log(labels)
  const [data,setData] = useState()

  // console.log(data)
    const img_url = details['sprites']['other']['official-artwork']['front_default']
  return (
    <>
     <h1 style = {{textAlign : "center"}}>{details.species.name} #{details.id}</h1>
     <div>
    <div className='container detail'>
        <img width = "30%" src = {img_url} />
        {/* <h1>{data && data[0].username}</h1> */}
        <div className='chart'>
    <Chart details={details} />  
  </div>
    </div>
    <h1 style = {{textAlign : "center"}}>Moves</h1>
    <Moves  details = {details}/>
    </div>
  </>
    
    
  )
}
