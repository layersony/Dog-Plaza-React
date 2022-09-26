import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import authHeader from "../services/auth-header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DogHouseReview from './DogHouseReview'

function DogDetail() {
  const { id } = useParams()
  const [dogdt, setdogdt] = useState({})

  useEffect(() =>{
    const fetchdata = async () => {
      const data = await fetch(`/dog_houses/${id}`, { 
        headers: authHeader()
      })
      const json = await data.json()
      setdogdt(json)
    }

    fetchdata().catch(console.error)
  },[id])


  return (
    <Container className="mt-5 mb-5 p-2">
      <div className="dghouseimg">
        <img src={dogdt.imageurl} alt={dogdt.name} />
      </div>
      <div className="p-2">
        <hr />
        <h3>{dogdt.name}</h3>
        <div>
          <span>Rating: <b>{dogdt.id}</b> </span> - 
          <span> Rooms : <b>{dogdt.dogrooms}</b> </span> -
          <span> Price : <b>{dogdt.price}</b> </span>
          <p>Location: <b>{dogdt.location}</b> </p>
        </div>
        <hr />
      </div>
      <Container className="p-2">
        <Row>
          <Col>
            <h3>Description</h3>
            {dogdt.description}
            <hr />
            <div>
              <h4>What this place offers</h4>
              {dogdt.amedities}
            </div>
          </Col>
          <Col>Map</Col>
        </Row>
      </Container>
      <hr />
      <div>
        <h3>Reviews</h3>
        <DogHouseReview dgHouseId={dogdt.id} />
      </div>
    </Container>
  )
}    

export default DogDetail