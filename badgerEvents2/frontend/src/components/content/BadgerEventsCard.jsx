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

  const checkChat = async (e) => {
    //e.preventDefault();
    try {
      const r = await axios.post("http://localhost:3001/checkChat", {username: "woojin", secret: "woojin"});
      console.log(r.data)
      console.log(props.title)

      const normalizedTitle = props.title.trim()

      const chatExists = r.data.find(chat => chat.title == normalizedTitle)
      console.log("chatExists ", chatExists)

      if (chatExists) {
        setChatId(chatExists.id)
        joinIn();
      }else {
        createChat();
      }
    } catch (error) {
      console.log("checkChat Error", error)
    }
  }

  const createChat = async (e) => {
    //e.preventDefault();
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
      console.log("join data ", r.data)
    } catch (error) {
      console.log("joinIn Error", error)
    }

  }

  return (
    <Card style={{ margin: '0.5rem', padding: '0.5rem' }}>
      <h2>{props.title}</h2>
      <Button onClick={checkChat}>Join in</Button>
    </Card>
  );
};

export default BadgerEventsCard;