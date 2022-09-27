import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserService from "../services/user.service";

function DogHouseReview(props) {
  const id = props.dgHouseId
  const [ reviews, setReviews ] = useState([])

  useEffect(()=>{
    if (id) {
      UserService.getdogHouseReviews(id).then(res => setReviews(res.data))
    }

  }, [id])

  return (
    <>
      <Container>
        <Row>
            {reviews.length === 0 ? <p>No Reviews Yet</p> : reviews.map((item, index) => {
              return (
                <Col xs="12" sm="12" md="6" lg="4" key={index}>
                  <div>
                    <div className="star-rating">
                      {[...Array(2)].map((item, ind) => {
                        return (
                          <span key={ind} className="star">&#9733;</span>
                        );
                      })}
                    </div>
                    <span>{item.review}</span> <br />
                    <sub>By <b>{item.user.fullname}</b></sub><br />
                    <sub>Posted on {new Date(item.created_at).toLocaleDateString()}</sub>
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