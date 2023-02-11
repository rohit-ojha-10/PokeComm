import axios from 'axios';
import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import { register } from 'vega-lite-api';
import { LinearProgress } from '@mui/material'
export default function Register() {
    const navigate = useNavigate();
    const [registered,setRegistered] = useState(false)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        if(registered)
        navigate('/allpokemons')
    },[registered])
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        // console.log("ho gya")
        console.log(nameRef.current.value)
        try {
            await axios.post('https://pokecommrest.onrender.com/credential', {
                name: nameRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value
            }).then((response) => {
                console.log(response.data)
                toast("SuccessFully Registered , Login to continue!")
               setRegistered(true)
               setLoading(false)
            })
        } catch (error) {
            setLoading(false)
            toast.error("Username Already Exists")
            console.error(error)
        }
    }
    const nameRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    return (
        <>
            <div className='container'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="Enter name" name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control ref={usernameRef} type="text" placeholder="Enter Username" name="username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" name="password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
                <ToastContainer />
                {loading && <LinearProgress />}
            </div>
        </>

    )
}
