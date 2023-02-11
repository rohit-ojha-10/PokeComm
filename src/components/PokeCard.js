import React from 'react'
import "../style.css"
import Card from './Card'
export default function PokeCard({data,handleNext,handlePrev,next,prev}) {
  // console.log(data)
  if(data === undefined){
    return (
      <h1>Loading...</h1>
    )
  }
    
    const results = data.results.map((item) => {
      console.log(item)
      let num = item.url.slice(34,item.url.length-1)
      let n = num
      if(num.length == 1)
        num = "00" + num;
      if(num.length == 2)
        num = "0" + num; 
     return (
     <div className = "card1" key = {num} >
      <Card key = {num} name = {item.name} num = {n}/>
     </div>
     )
    }
    )
  return (
    <div style={{overflowY:"hidden"}}>
      <div className="card1-container"> 
      {results}
      </div>
      {prev && <button style = {{"margin-left" : "42rem",marginRight : "0.7rem"}}className = 'btn btn-dark btn-lg ml-4 text-center' onClick={handlePrev}>Prev</button>}
      {next && <button style = {{"margin-left" : prev ? "" : "44.8rem",marginRight : prev ? "" : "0.7rem"}} className='btn btn-dark btn-lg ml-4' onClick={handleNext}>Next</button>}
    </div>
  )
}
