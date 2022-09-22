import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <Container className='mt-5 pt-5 d-flex justify-content-center flex-column align-items-center'>
      <h1>404 Page Not Found</h1>
      <h4>Go Back To <Link to="/phase-2-blog">Home</Link></h4>
    </Container>
  )
}

export default NotFound