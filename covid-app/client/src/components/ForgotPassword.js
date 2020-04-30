import React from 'react';
import { doPasswordReset } from '../firebase/FirebaseFunctions';
import { Modal, Col, Form, Button } from 'react-bootstrap';

// Sends Reset Email To Users Who Forgot Their Password
const ForgotPassword = (props) => {

    const handleReset = async (e) => {
        let email = document.getElementById('email-reset').value;
        if (email) {
            doPasswordReset(email)
            .then( (res) => {
                alert('Password Reset Email Sent')
            });
        } else {
            alert("Enter Email");
        }
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Forgot Passwords
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleReset}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="email-reset">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className='login-form'
                                name='email-reset'
                                type='email'
                                placeholder='Email'
                                autoComplete='username'
                                required
                            />
                        </Form.Group>
                        <Button type='submit'>Send Reset Link</Button>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}> Back to Login</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ForgotPassword;