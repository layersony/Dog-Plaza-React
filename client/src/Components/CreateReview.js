import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
// import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import authHeader from '../services/auth-header';

function CreateReview(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const MySwal = withReactContent(Swal)

  const onSubmit = data => {
    data['user_id'] = AuthService.getCurrentUser().user.id
    data['dog_house_id'] = props.doghousedt
    setIsLoading(true);
    
    const reqOption = {
      method: "POST",
      body: JSON.stringify(data),
      headers: authHeader()
    }

    fetch('/reviews', reqOption).then((res) =>  {  
      if (res.status === 201) {
        window.location.reload();
        setIsLoading(false);
      } else {
        MySwal.fire({
          icon: 'error',
          title: res.error
        })
        setIsLoading(false);
      }
    }).catch(er => {
      alert('Check Console Panel An Error Occured')
      console.log('error', er)
    })
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3">
            <Form.Label>Review</Form.Label>
            <Form.Control type="text" {...register("review", { required: true })} />
            <sub className="text-danger">{errors.review?.type === 'required' && "Review is required"}</sub>
          </Form.Group>

          <Form.Select {...register("rating", { required: true })} className="mb-3">
            <option>Select a Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>

          <Button variant="primary" type="submit">
            {isLoading ? "Loading..." : "Post"}
          </Button>

            </Form>

      </Container>
    </>
  )
}

export default CreateReview

