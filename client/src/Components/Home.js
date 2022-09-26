import { useState, useEffect } from "react";
import Doghouse from "./DoghouseCard";
import authHeader from "../services/auth-header"
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  const [doghouses, setdoghouses] = useState([])

  useEffect(()=>{
    fetch("/dog_houses", {
      headers: authHeader()
    })
      .then(r=>{
        if (r.ok) {
          r.json().then((homes) => setdoghouses(homes));
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const doghouselist = doghouses.map(item => {
    return <Doghouse key={item.id} doghousedt={item} />
  })

  return (
    <section className="dogHome">
      <div className="headerSection d-flex justify-content-center align-items-center">
        <Container>
          <Row className="">
            <Col className='headerLeft d-flex justify-content-center align-items-center flex-column'>
              <h1>Dog Shelter</h1>
              <p>Best Place for you Dog to Stay when you on Vacation</p>
            </Col>
            <Col className="d-flex justify-content-end">
              <img src={require('../images/dogheader.png')} alt="headerSecton"/>
            </Col>
          </Row>
        </Container>
      </div>

      <Container fluid className="mt-5 mb-5 p-3 doghouselist">
        <h3 className="text-center m-3">Dog Houses</h3>
        <Row>
          <Col>
            {doghouselist}
          </Col>
          <Col className="">
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
