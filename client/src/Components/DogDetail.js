import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import authHeader from "../services/auth-header"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from './Map'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import CreateReview from "./CreateReview"
import DogHouseReview from './DogHouseReview'
import UserService from "../services/user.service";

function DogDetail() {
  const { id } = useParams()
  const [dogdt, setdogdt] = useState({})
  const [location, setlocation] = useState('')

  // Modal
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() =>{
    const fetchdata = async () => {
      const data = await fetch(`/dog_houses/${id}`, { 
        headers: authHeader()
      })
      const json = await data.json()
      setdogdt(json)

      UserService.getMapLocation("-1.321879", "36.707604").then(res => {
        let location = res.data.results[0].locations[0]
        setlocation(`${location.street} - ${location.adminArea3} - ${location.adminArea1}`)
      })
    }

    fetchdata().catch(console.error)
  },[id])

  function ReviewCreate(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Review <b>{dogdt.name}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateReview doghousedt={dogdt.id} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" size="sm" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

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
          <p>Location: <b>{location}</b> </p>
        </div>
        <hr />
      </div>
      <Container className="p-2">
        <Row>
          <Col xs="12" sm="12" md="6" lg="6">
            <h3>Description</h3>
            {dogdt.description}
            <hr />
            <div>
              <h4>What this place offers</h4>
              {dogdt.amedities}
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6"> <Map /> </Col>
        </Row>
      </Container>
      <hr />
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h3>Reviews</h3>
          <Button variant="info" size="sm" onClick={() => setModalShow(true)}>Add Review</Button>
        </div>
        <DogHouseReview dgHouseId={dogdt.id} />
      </div>

      <ReviewCreate show={modalShow} onHide={() => setModalShow(false)} />

    </Container>
  )
}    

export default DogDetail