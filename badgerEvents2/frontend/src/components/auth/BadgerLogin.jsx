import axios from "axios"
import React, {useEffect, useState,useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Pagination, Form, Button } from "react-bootstrap";

const BadgerLogin = (props) => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const passwardRef = useRef();

    const onSubmit = (e) => {
      if(nameRef.current.value ==='' ||passwardRef.current.value ===''){
        alert("You must provide both a username and password!");
        return;
    }
      e.preventDefault();
      const { value } = nameRef.current.value
      axios.post("http://localhost:3001/authenticate", {username: nameRef.current.value, secret: passwardRef.current.value})
      .then((r) => {
        props.onAuth({...r.data, secret: passwardRef.current.value})
        navigate('/')
      })
      .catch((e) => console.log("Auth Error", e))
    };

    return (
   
       <Form>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control id ='username' ref={nameRef} ></Form.Control>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control id = 'password'  type="password" ref={passwardRef} ></Form.Control>
            <br></br>
            <Button onClick={onSubmit}>Login</Button>
        </Form>
    );
  };
  
  export default BadgerLogin;

/*
  
  <div className="background">
  <form></form>
  <div className="form-title">Welcome 👋</div>

  <div className="form-subtitle">Set a username to get started</div>

  <div className="auth">
    <div className="auth-label">Username</div>
    <input className="auth-input" name="username" />
    <Button className="auth-button" onClick={onSubmit}>
      Enter
    </Button>
  </div>

</div>
*/