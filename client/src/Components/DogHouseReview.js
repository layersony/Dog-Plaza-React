import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserService from "../services/user.service";
import { Trash } from 'react-bootstrap-icons';

import AuthService from '../services/auth.service';

function DogHouseReview(props) {
  const id = props.dgHouseId
  const [ reviews, setReviews ] = useState([])
 
  const currentuser = AuthService.getCurrentUser()

  useEffect(()=>{
    if (id) {
      UserService.getdogHouseReviews(id).then(res => setReviews(res.data))
    }
  }, [id])

  function handleDeleteClick(id){
    UserService.deleteReview(id).then(res => {
      if (res.status === 204){
        window.location.reload();
      }
    })
  }

  return (
    <>
      <Container>
        <Row>
            {reviews.length === 0 ? <p>No Reviews Yet</p> : reviews.map((item, index) => {
              return (
                <Col xs="12" sm="12" md="6" lg="4" key={index}>
                  <div>
                    <div className="star-rating">
                      {[...Array(item.rating ? item.rating : 1 )].map((item, ind) => {
                        return (
                          <span key={ind} className="star">&#9733;</span>
                        );
                      })}
                    </div>
                    <span>{item.review}</span> <br />
                    <sub>By <b>{item.user.fullname}</b></sub><br />
                    <div className="d-flex justify-content-between align-items-center">
                      <sub>Posted on {new Date(item.created_at).toLocaleDateString()}</sub>
                      {currentuser.user.id === item.user.id ? <Trash onClick={() => handleDeleteClick(item.id)} color="red" /> : "." }
                      
                    </div>
                    <hr />
                  </div>
                </Col>
              )
            }) }
        </Row>
      </Container>
    </>
  )
}

export default DogHouseReview