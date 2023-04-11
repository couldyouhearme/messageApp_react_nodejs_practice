import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

export default function Login({ onIdSubmit }) {
    const idRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        let id = idRef.current.value
        onIdSubmit(id)
    }

    const createNewId = () => {
        const newId = uuidv4()
        onIdSubmit(newId)
    }

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className='w-100'>
                <Form.Group>
                    <Form.Label>Enter Your Id</Form.Label>
                    <Form.Control tyoe='text' ref={idRef} required />
                </Form.Group>
                <Button type='submit' className='mr-2'>Login</Button>
                <Button onClick={createNewId} variant='secondary'>Create a New Id</Button>
            </Form>
        </Container>
    )
}
