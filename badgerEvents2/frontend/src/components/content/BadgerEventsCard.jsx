import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const BadgerEventsCard = (props) => {
  const handleJoinChat = () => {
    // Call an API endpoint or perform any necessary logic to create a chat room
    axios.post('http://localhost:3001/create-chat-room', { roomName: props.title })
      .then((response) => {
        // Assuming the API response includes the chat room ID
        const chatRoomId = response.data.chatRoomId;

        // Navigate to the chat room with the specified ID
        props.onJoinChat(chatRoomId);
      })
      .catch((error) => {
        console.error('Error creating chat room:', error);
      });
  };

  return (
    <Card style={{ margin: '0.5rem', padding: '0.5rem' }}>
      <h2>{props.title}</h2>
      <Button onClick={handleJoinChat}>Join in</Button>
    </Card>
  );
};

export default BadgerEventsCard;