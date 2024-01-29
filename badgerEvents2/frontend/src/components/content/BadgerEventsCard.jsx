import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import {useState, useEffect} from 'react'

import './BadgerEventsCard.css'

const BadgerEventsCard = (props) => {

  const [chatId, setChatId] = useState("");
  const [shouldJoin, setShouldJoin] = useState(false);
  const [color, setColor] = useState("");


  const checkChat = async (e) => {
    try {
      const r = await axios.post("http://localhost:3001/checkChat", {username: "woojin", secret: "woojin"});
      console.log(r.data)

      const normalizedTitle = props.title.trim()

      const chatExists = r.data.find(chat => chat.title == normalizedTitle)
      console.log("chatExists ", chatExists)

      if (chatExists) {
        setChatId(chatExists.id)
        setShouldJoin(true)
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
      setShouldJoin(true)
    } catch (error) {
      console.log("Auth Error", error)
    }
  }

  useEffect(() => {

    const selectRandomColor = () => {
      const colors = ["blue", "red", "green", "yellow"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    setColor(selectRandomColor());


    if (chatId && shouldJoin) {
      joinIn();
    }
  }, [chatId, shouldJoin])

  const joinIn = async () => {
    console.log(chatId, "hey")

    console.log(props.username)
    console.log(props.secret)


    try {
      const r = await axios.post("http://localhost:3001/joinChat", {chatId: chatId, username: props.username, secret: props.secret});
      console.log("join success ", r.data)
      setShouldJoin(false)
    } catch (error) {
      console.log("joinIn Error", error)
    }

  }

  const getImageSource = (color) => {
    switch (color) {
      case "blue":
        return "https://picsum.photos/800/600?image=1041";
      case "red":
        return "https://picsum.photos/800/600?image=1080";
      case "green":
        return "https://picsum.photos/800/600?image=1039";
      case "yellow":
        return "https://picsum.photos/800/600?image=943";
    }
  }

  return (

   
      <div className={`projcard projcard-${color}`}>
          <div className="projcard-innerbox">
            <img className="projcard-img" src={getImageSource(color)}/>
            <div className="projcard-textbox">
              <div className="projcard-title">{props.title}</div>
              <div className="projcard-subtitle">{props.pubDate}</div>
              <div className="projcard-bar"></div>
              <div className="projcard-description">{props.description}</div>
              <div className="projcard-tagbox">
                <span className="projcard-tag">tag</span>
              </div>
            </div>
          </div>
      </div>
   
  
    /*<Card style={{ margin: '0.5rem', padding: '0.5rem' }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.date}</p>
      <p>{props.pubDate}</p>
      <p>{props.link}</p>
      <p>{props.guid}</p>
      <Button onClick={checkChat}>Join in</Button>
    </Card>*/
  );
};

export default BadgerEventsCard;