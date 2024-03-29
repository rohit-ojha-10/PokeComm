import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useRef, useState } from 'react';
import PokeCard from './PokeCard';
import { LinearProgress } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function RenderHome({data,handleNext,handlePrev,next,prev,isTrue,setIsTrue}) {
  const passwordRef = useRef();
  const usernameRef = useRef();
  const [loading,setLoading] = useState(false)
  const [errorMessage,setErrorMessage] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`https://pokecommrest.onrender.com/credential/login`,
      {
        username : usernameRef.current.value,
        password : passwordRef.current.value
      })
      .then((response) => {
        if((Number)(response.data) === 0){
          localStorage.setItem('isTrue','0')
          // console.log(localStorage.getItem('isTrue'))
          setIsTrue(0)
          setLoading(false)
        }
        else{
          toast.error("Invalid Credentials Try Again")
          setLoading(false)
          console.log(response.data)
        }
      })
    } catch (error) {
      setErrorMessage(error)
    }
  }
  const Logout = () => {
    localStorage.setItem('isTrue','1')
    setIsTrue(1)
  }
  if(isTrue === 0){
    return (
      <>
      <PokeCard key = {1} data = {data} handleNext = {handleNext} handlePrev = {handlePrev} next = {data && data.next} prev = {data && data.previous} isTrue = {isTrue} setIsTrue = {setIsTrue}/>
      <button style = {{"margin-left" : "44rem","margin-top" : "1rem"}} className = 'btn btn-danger btn-large' onClick = {Logout}>Logout</button>
      </>
    )
  }
 const img_url = "https://pngimg.com/uploads/pokemon/pokemon_PNG161.png"
  return (
    <>
    <div className='full_container'>
      <div className='login_img'>
        <img src = {img_url} />
      </div>
      <div className='loginbox'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control autoComplete="off" ref={usernameRef} type="text" placeholder="Enter Username" name="username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control autoComplete="off" ref={passwordRef} type="password" placeholder="Password" name="password" />
          </Form.Group>
          <Button style={{width:"28vw"}} variant="primary" type="submit">
            Login
          </Button>
        <NavLink to='/register'>Register</NavLink>
        </Form>
        <ToastContainer />
        {loading && <LinearProgress />}
      </div>
      </div>
      
    </>
  )
}
