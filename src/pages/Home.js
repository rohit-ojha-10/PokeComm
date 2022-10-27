import React, { useState } from 'react'
import HomeCard from '../components/HomeCard'
import RenderHome from '../components/RenderHome'
import background from '../images/home_page.jpg'
export default function Home() {
  const data = []
  const temp = [0,0,0]
  const [dummy , setDummy] = useState(0)
  for(var i = 0 ;i < 3;i++){
   data.push(<HomeCard />)
  }
  console.log(dummy)
  return (
    <div>
      <div className='banner'>
      <video muted={true} autoPlay={true} loop={true}>
      <source src="https://storage.googleapis.com/pgoblog/seasons-light/seasonoflight_16x9_1080.mp4" type="video/mp4"/>
      </video>
      </div>
      <img className = 'banner-content' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'></img>
      <div className='container home-card-container'>
      {
        temp.map((it) => {
          return <HomeCard dummy = {dummy}/>
        })
      }
      </div>
      <div class="col-md-12 mt-1 text-center">
      <button className = 'home-btn btn btn-primary' onClick = {() =>{ setDummy((dummy+1) % 2);}}>Surprise Yourself</button>
      </div>
    </div>
  )
}
