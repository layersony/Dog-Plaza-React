import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import AuthService from "../services/auth.service";

function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const MySwal = withReactContent(Swal)

  const onSubmit = data => {
    setIsLoading(true);
    AuthService.login(data.email, data.password).then(()=>{
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
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={handleSubmit(onSubmit)}>

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

              <Button variant="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
              </Button>

            </Form>

          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default SignIn