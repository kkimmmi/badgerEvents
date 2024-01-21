import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const BadgerEventsCard = (props) => {

  /*function joinIn() {

    axios.post("http://localhost:3001/creatChat", {username: "woojin", title: props.title})
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => console.log("Auth Error", e))

  }*/

  const joinIn = (e) => {
    e.preventDefault();
    const uname = props.user['username'];
    const usecret = props.user['secret'];
    if(props.chat_id==""){
    axios.post("http://localhost:3001/creatChat", {username: uname, title: props.title, secret:usecret})
      .then((r) => {
        console.log(r.data);
        console.log(index);
        props.chat_id= r.data.id;
      })
      .catch((e) => console.log("Auth Error", e))
    }
  }

  return (
    <Card style={{ margin: '0.5rem', padding: '0.5rem' }}>
      <h2>{props.title}</h2>
      <Button onClick={joinIn}>Join in</Button>
    </Card>
  );
};

export default BadgerEventsCard;