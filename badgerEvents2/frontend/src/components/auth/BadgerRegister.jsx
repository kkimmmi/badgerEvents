import axios from "axios"
import React, {useEffect, useState,useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Pagination, Form, Button } from "react-bootstrap";


const BadgerRegister = (props) => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const passwardRef = useRef();
    const fnameRef = useRef();
    const lnameRef = useRef();

    const onSubmit = (e) => {
      if  (nameRef.current.value ==='' || passwardRef.current.value ==='' || fnameRef.current.value === '' || lnameRef.current.value === '') {
        alert("You must provide all specified...");
        return;
      }
      e.preventDefault();

      axios.post("http://localhost:3001/register", {username: nameRef.current.value, secret: passwardRef.current.value, first: fnameRef.current.value, last: lnameRef.current.value})
      .then((r) => {
        if (r.status == 200) {
          console.log(r.data);
          alert("You are successfully registered!");
        }

      })
      .catch((error) => {
        if (error.response) {
          console.log("Register Error", error);
        }
        alert(error.response.data.message);
      })
    }






   


  return (
    <Form>
         <Form.Label htmlFor='username'>Username</Form.Label>
         <Form.Control id ='username' ref={nameRef} ></Form.Control>
         <Form.Label htmlFor='password'>Password</Form.Label>
         <Form.Control id = 'password'  type="password" ref={passwardRef} ></Form.Control>
         <Form.Label htmlFor='first_name'>First Name</Form.Label>
         <Form.Control id = 'first_name' ref={fnameRef} ></Form.Control>
         <Form.Label htmlFor='last_name'>Last Name</Form.Label>
         <Form.Control id = 'last_name' ref={lnameRef} ></Form.Control>
         <br></br>
         <Button onClick={onSubmit}>Register</Button>
     </Form>
 );
  };
  
  export default BadgerRegister;