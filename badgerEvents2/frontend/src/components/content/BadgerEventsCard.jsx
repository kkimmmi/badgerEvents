import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react'

const BadgerEventsCard = (props) => {

  const [chatId, setChatId] = useState("");

  /*function joinIn() {

    axios.post("http://localhost:3001/creatChat", {username: "woojin", title: props.title})
      .then((r) => {
        console.log(r.data);
      })
      .catch((e) => console.log("Auth Error", e))

  }*/

  const createChat = async (e) => {
    e.preventDefault();
    try {
      const r = await axios.post("http://localhost:3001/creatChat", {username: "woojin", title: props.title});
      console.log(r.data)
      setChatId(r.data.id)
    } catch (error) {
      console.log("Auth Error", error)
    }

    /*axios.post("http://localhost:3001/creatChat", {username: "woojin", title: props.title})
      .then((r) => {
        console.log(r.data);
        setChatId(r.data.id)
        joinIn()
      })
      .catch((e) => console.log("Auth Error", e))
    
      joinIn()*/
  }

  useEffect(() => {
    if (chatId) {
      joinIn();
    }
  }, [chatId])

  const joinIn = async () => {
    console.log(chatId, "hey")

    console.log(props.username)
    console.log(props.secret)


    try {
      const r = await axios.post("http://localhost:3001/joinChat", {chatId: chatId, username: props.username, secret: props.secret});
      console.log(r.data)
    } catch (error) {
      console.log("joinIn Error", error)
    }

  }

  return (
    <Card style={{ margin: '0.5rem', padding: '0.5rem' }}>
      <h2>{props.title}</h2>
      <Button onClick={createChat}>Join in</Button>
    </Card>
  );
};

export default BadgerEventsCard;