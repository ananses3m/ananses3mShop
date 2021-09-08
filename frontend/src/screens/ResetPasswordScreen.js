import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { passwordResetEmail } from '../actions/userActions';

const ResetPasswordScreen = ({ history }) => {
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const userPasswordResetEmail = useSelector(state => state.userPasswordResetEmail);
    const { loading, error, userInfo } = userPasswordResetEmail;

    // useEffect(() => {
    //     if (userInfo) {
    //         history.push(redirect)
    //     }
    // }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(passwordResetEmail(email))
        // history.push('/login')
    }

    return (
        <FormContainer>
            <h1>Reset Password</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-3'>Reset</Button>
            </Form>
        </FormContainer>
    )
}

export default ResetPasswordScreen
