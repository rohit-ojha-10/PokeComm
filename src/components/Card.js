import React from 'react'
import { useState , useEffect } from 'react'
import { NavLink }  from "react-router-dom"
import { CircularProgress } from '@mui/material'
export default function Card({name , num}) {
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
  const [imageLoaded, setImageLoaded]=React.useState(false);
    const [pokeData,setPokeData] = useState()
    useEffect(() => {
        const api_call = async () => {
            let d = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
            let poke = await d.json()
            setPokeData(poke)
            // console.log(pokeData)
            // console.log(poke)
        }
        api_call()
    },[])
    let types,weight,hp,attack,img_url;
    let style = {}
    if(pokeData !== undefined){
       img_url = pokeData['sprites']['other']['official-artwork']['front_default']
       types = pokeData.types[0].type.name
       weight = pokeData.weight
       hp = pokeData.stats[0].base_stat
       attack = pokeData.stats[1].base_stat
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
    // console.log(weight)
  // console.log(pokeData)
  
  return (
    <>
      <div className = 'card1-content' style = {style}>
       {
       pokeData !== undefined ?
       <div className='_'>
        <div className='card1-img mb-4' >
       <img src={img_url} onLoad={()=> setImageLoaded(true)} />
       </div>
       {/* {!imageLoaded && <h1>Loading...</h1>} */}
       {imageLoaded && <div>
        <h3>{name}</h3>
       <h5>Type : {types}</h5>  
       <h5>Weight : {weight} Kg</h5>
        <h5>HP : {hp}</h5>
        <h5>Attack : {attack}</h5>
         <NavLink state = {pokeData} className='btn btn-sm btn-dark my-3' to = '/pokedetails'>View Details</NavLink>
         </div>}
        
       </div>
       :<CircularProgress />
       }
       </div>
   </>
  )
}
