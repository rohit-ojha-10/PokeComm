import axios from 'axios';
import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
export default function Register() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("ho gya")
        console.log(nameRef.current.value)
        try {
            await axios.post('https://pokecommrest.onrender.com/credential', {
                name: nameRef.current.value,
                username: usernameRef.current.value,
                password: passwordRef.current.value
            }).then((response) => console.log(response.data))
        } catch (error) {
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
                        Submit
                    </Button>
                </Form>
                <NavLink to='/register'>Register</NavLink>
            </div>
        </>

    )
}
