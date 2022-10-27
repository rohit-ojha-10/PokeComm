import React, { useState } from 'react'
import { useEffect } from 'react';

export default function HomeCard({dummy}) {
  const colors = {
    fire : '#F77E21',
    water : '#43919B',
    grass : '#019267',
    normal : '#D8D9CF',
    psychic : 'pink',
    fairy : 'pink',
    poison : '#C689C6',
    bug : '#749F82',
    ground : '#9F8772',
    electric : '#FFC23C',
    ice :'skyblue',
    fighting : 'grey',
    flying : 'purple',
    rock : 'brown',
    ghost : '#726A95',
    dark : '#2C3333',
    dragon : '#DD5353',
    steel : 'silver'

  }
    
  let nums = (Math.floor(Math.random() * 50) + 1)
  let img_url;
  console.log(" i am in homecard")
  const [pokeData,setPokeData] = useState()
  useEffect(() => {
    let curr_render = true
    const api_call = async () => {
      if(curr_render){
        let d = await fetch(`https://pokeapi.co/api/v2/pokemon/${nums}/`)
        let poke = await d.json()
        setPokeData(poke)
        console.log(poke)
      }
        // console.log(pokeData)
        // console.log("hello")
        // console.log(poke)
    }
    api_call()
    return () => {
      curr_render=false
    }
},[dummy])
let types,weight,hp,attack,name;
let style = {}
if(pokeData !== undefined){
  name = pokeData.species.name;
   types = pokeData.types[0].type.name
   weight = pokeData.weight
   hp = pokeData.stats[0].base_stat
   attack = pokeData.stats[1].base_stat
   img_url = pokeData['sprites']['other']['official-artwork']['front_default']
// console.log(img_url)
  let color = colors[types]
  style = {
    borderRadius:"5%",
    backgroundColor : `${color}`,
    color:'black'
  }
  if(types === 'dark' || types === 'grass' || types === 'water'  ){
    style.color = '#EAEAEA'
  }
  if( types === 'rock'){
  style.color = '#EAEAEA'
  }
}

  return (
    <div>
      <div className='home-card' style = {style}>
        <div className='home-card-img' style = {style}>
        {<img src={img_url} />}
        </div>
        {
       pokeData !== undefined ?
       <div>
        <h3>{name}</h3>
       <h5>Type : {types}</h5>  
       <h5>Weight : {weight} Kg</h5>
        <h5>HP : {hp}</h5>
        {/* <h5>Attack : {attack}</h5> */}
       </div>
       :<h1>Loading...</h1>
       }
      </div>
    </div>
  )
}
