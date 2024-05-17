import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const Create = () => {
  const [data, setData] = useState({
    title: "",
    author: "",
    body: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
    ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

       if (!data.title.trim()) {
        toast.error('Title is required.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        return; 
      }
      if (!data.author.trim()) {
        toast.error('Author is required.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        return; 
      }
      if (!data.body.trim()) {
        toast.error('Body is required.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        return; 
      }

    axios.post('http://localhost:4000/blogs', data)
    .then(res => {
        toast.success('New blog added successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      })
    .catch(err => {
        toast.error('An error occurred while saving the blog', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title:</Form.Label>
          <Form.Control name="title" type="text" onChange={handleChange} placeholder='Enter Blog Title' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author:</Form.Label>
          <Form.Control name="author" type="text" onChange={handleChange} placeholder='Enter Author Name' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" onChange={handleChange} name="body" />
        </Form.Group>

        <Button variant='primary' type='submit'>Save Blog</Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default Create;
