import React, { memo } from "react"
import { useState, useEffect } from 'react';
import BadgerEventsCard from './BadgerEventsCard'
import { Row, Col, Container, Pagination, Form, Button } from "react-bootstrap";

function BadgerHome() {

    return (
        <>
            <h1>welcome to ...............event-chat web......!</h1>
        </>
    );
}

export default memo(BadgerHome);

/*<h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Date: {item.date}</p>
          <p>PubDate: {item.pubDate}</p>
          <p>Link: {item.link}</p>
          <p>Guid: {item.guid}</p>
        */