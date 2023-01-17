import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import UserService from "../services/user.service";

function Doghouse(props) {
  const doghouseObj = props.doghousedt
  const [location, setlocation] = useState('')
  const lat = doghouseObj.location.split(',')[0]
  const long = doghouseObj.location.split(',')[1]
  
  useEffect(()=>{
    UserService.getMapLocation(lat, long).then(res => {
      let location = res.data.results[0].locations[0]
      setlocation(`${location.street} - ${location.adminArea3} - ${location.adminArea1}`)
    })
  })

  return (
    <div className='col-12 mt-3 d-flex justify-content-center align-items-center dghomeLanding'>
      <img src={doghouseObj.imageurl} alt="simple" />
      <div className='p-2 d-flex flex-column align-items-base dgCarddt'>
        <h4 className='mb-auto'>{doghouseObj.name} </h4>
        <Container fluid className='d-flex flex-column justify-content-between dogdata'>
          <div>Location : {location} </div>
          <div>Rooms : {doghouseObj.dogrooms} </div>
          <Link to={`/doghouse/${doghouseObj.id}`}>Read More{' '}</Link>
        </Container>
      </div>
    </div>

  )
}

export default Doghouse
