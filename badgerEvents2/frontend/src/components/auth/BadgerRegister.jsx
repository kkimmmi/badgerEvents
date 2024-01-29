import axios from "axios"
import React, {useEffect, useState,useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Pagination, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
 background: lavender;
 padding: 20px;

 h1 {
   border-bottom: 1px solid white;
   color: #3d3d3d;
   font-family: "Times New Roman";
   font-size: 20px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
   border-radius: 4px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
   padding: 15px 20px; 
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 15px;
   margin: 20px 0px;
   padding: 5px 10px; 
   border-radius: 4px;
 }
 .submitButton:hover {
  background-color: #5762a8; 
}
`;

const BadgerRegister = (props) => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const passwordRef = useRef();
    const fnameRef = useRef();
    const lnameRef = useRef();



  const handleNavigate = () => {
    navigate('/login'); 
  };
    const onSubmit = (e) => {
      if  (nameRef.current.value ==='' || passwordRef.current.value ==='' || fnameRef.current.value === '' || lnameRef.current.value === '') {
        alert("You must provide all specified...");
        return;
      }
      e.preventDefault();

      axios.post("http://localhost:3001/register", {username: nameRef.current.value, secret: passwordRef.current.value, first: fnameRef.current.value, last: lnameRef.current.value})
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
  <form className = "form">
  <label htmlFor="username" style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>REGISTER</label>
  <br />
  <label htmlFor="username">Username</label>
  <input id="username" type="text" ref={nameRef} />
  <br />
  <label htmlFor="password">Password</label>
  <input id="password" type="password" ref={passwordRef} />
  <br />
  <label htmlFor="first_name">First Name</label>
  <input id="first_name" type="text" ref={fnameRef} />
  <br />
  <label htmlFor="last_name">Last Name</label>
  <input id="last_name" type="text" ref={lnameRef} />

  <br />
  <button type="button" onClick={onSubmit} className="submitButton">Sign Up</button>
  <p>
        Have an Account? <span style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleNavigate}>Click Here</span>
  </p>
  </form>
  
 );
  };

  export default function App() {
    return (
      <Styles>
        <BadgerRegister />
      </Styles>
    );
   }