import React, { useState } from'react';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
 import 'react-toastify/ReactToastify.css';

const Create = () =>{
    const [data, setData] = useState({
      title: "",
      author:"",
      body:""
    })
    
 const handleChange = (e) =>{
   const {name, value} = e.target;
   setData((prev) => {
     return {...prev,[name]: value}   
   })
 }
   
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/blogs', data)
    .then(res =>{
      //alert('new blog added')
      toast.success('new blog added successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
    })
    // .catch(err => console.log(err.message));
    .catch(err=>{
      toast.error('an error occured while saving the blog',{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    })
  })
}
return (
    <div>
    <Form onSubmit={handleSubmit}>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control name="title" type="text" onChange={handleChange} placeholder='Enter Book Title'></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Author:</Form.Label>
    <Form.Control name="author" type="text" onChange={handleChange} placeholder='Enter Author Name'></Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Body</Form.Label>
    <Form.Control as="textarea" onChange={handleChange}></Form.Control>
    </Form.Group>

    <Button variant='primary' type='submit'>save blog</Button>
    <ToastContainer/>

    </Form>
      
  </div>

);
};
export default Create;