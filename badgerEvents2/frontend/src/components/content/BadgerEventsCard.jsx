import React from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const BadgerEventsCard = (props) => {

  return (
    <Card style={{ margin: '0.5rem', padding: '0.5rem' }}>
      <h2>{props.title}</h2>
      <Button >Join in</Button>
    </Card>
  );
};

export default BadgerEventsCard;