import React from 'react';
import {useState , useEffect} from "react"
import PokeCard from './components/PokeCard';
import {NavLink , BrowserRouter , Routes,Route} from "react-router-dom"
import PokeDetails from './pages/PokeDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import RenderHome from './components/RenderHome';
import axios from 'axios';
function App() {
  const api_url = "https://pokeapi.co/api/v2/pokemon?limit=12";
  const [data , setData] = useState();
  const [curr , setCurr] = useState(api_url);
  let t = (Number)(localStorage.getItem('isTrue')) === 0 ? 0 : 1;
  const [isTrue , setIsTrue] = useState(1)
  useEffect(() => {
    setIsTrue(t)
  },[t])
  const handleNext = () => {
    setCurr(data.next)
    // console.log(prev)
  }
  const handlePrev = (e) => { 
    if(data.previous !== null){
      setCurr(data.previous)
    }  
  }
  useEffect(() => {
    const api_call = async () => {
      let d = await fetch(curr)
      let pokemons = await d.json()
      setData(pokemons)
    }
    api_call()
  },[curr])
  console.log("rendered")
  return (
    <>
    
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = '/allpokemons' element = {<RenderHome key = {1} data = {data} handleNext = {handleNext} handlePrev = {handlePrev} next = {data && data.next} prev = {data && data.previous} isTrue = {isTrue} setIsTrue = {setIsTrue}/>}></Route>
      <Route path = '/pokedetails' element = {<PokeDetails />}></Route>
      <Route path = '/register' element = {<Register />}></Route>
    </Routes>
    <Footer />
    </div>
    </>

  );
}
export default App;
