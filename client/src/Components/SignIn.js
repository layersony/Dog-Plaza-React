import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import AuthService from "../services/auth.service";

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();

  const onSubmit = data => {
    setIsLoading(true);
    AuthService.login(data.email, data.password).then(()=>{
      navigate('/')
      window.location.reload();
      setIsLoading(false);
    }, error => {
      setIsLoading(false);
      MySwal.fire({
        icon: 'error',
        title: error,
      })
    })
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center accountSignup">
        <Row className="w-100">
          <Col sm={12} md={6}>
            <img src={require('../images/login.png')} alt="headerSecton" />
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="">Log In</h2>
            <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>

              <Form.Group className="mb-3" controlId="formGroupemail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="johndoe@gmail.com" {...register("email", { required: true })} />
                <sub className="text-danger">{errors.email?.type === 'required' && "Email is required"}</sub>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="********" {...register("password", { required: true })} />
                <sub className="text-danger">{errors.password?.type === 'required' && "Password is required"}</sub>
              </Form.Group>

              <div className="d-flex justify-content-center align-items-center flex-column">
                <Button variant="primary" type="submit">
                  {isLoading ? "Loading..." : "Login"}
                </Button>
                <sub className='mt-3'>Don't have a Account Yet? <Link to="/signup" variant="body2">Sign up here</Link></sub>
              </div>
            </Form>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignIn