import React from 'react';
import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'
import AuthService from "../services/auth.service";
import { Link } from 'react-router-dom';

function SignUp(){

  const { register, handleSubmit, formState: { errors } } = useForm();
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();


  const onSubmit = data => {
    AuthService.register(data.fullname, data.email, data.phonenumber, data.password).then(res => {
      navigate('/')
      window.location.reload();
    }, error => {
          MySwal.fire({
            icon: 'error',
            title: error,
            text: 'Go to Login'
          })
    })
  }

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center accountSignup">
        <Row className="w-100">
          <Col sm={12} md={6}>
            <img src={require('../images/join.png')} alt="headerSecton" />
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="">Sign Up</h2>
            {errors.exampleRequired && <span>This field is required</span>}

            <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formGroupfullname">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" {...register("fullname", { required: true })} />
                <sub className="text-danger">{errors.fullname?.type === 'required' && "Full Name is required"}</sub>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupemail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="johndoe@gmail.com" {...register("email", { required: true })} />
                <sub className="text-danger">{errors.email?.type === 'required' && "Email is required"}</sub>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupphonenumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="+25479685685" {...register("phonenumber", { required: true })} />
                <sub className="text-danger">{errors.phonenumber?.type === 'required' && "Phone Number is required"}</sub>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="********" {...register("password", { required: true })} />
                <sub className="text-danger">{errors.password?.type === 'required' && "Password is required"}</sub>
              </Form.Group>


              <div className="d-flex justify-content-center align-items-center flex-column">
                <Button variant="primary" type="submit">Register</Button>
                <sub className='mt-3'>Have a Account Yet? <Link to="/signin" variant="body2">Login here</Link></sub>
              </div>

            </Form>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignUp