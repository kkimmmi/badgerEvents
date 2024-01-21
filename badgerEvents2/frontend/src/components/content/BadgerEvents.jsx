import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BadgerEventsCard from './BadgerEventsCard'
import { Row, Col, Container, Pagination, Form, Button } from "react-bootstrap";


const BadgerEvents= (props) => {

    const [rssData, setRssData] = useState([]);

    const changeAuth = () => {
        props.changeAuth();
        navigate('/');
      };

    useEffect(() => {
        const fetchRssData = async () => {
            try {
                const response = await fetch(
                    "https://corsproxy.io/?https%3A%2F%2Ftoday.wisc.edu%2Fevents.rss2?refresh=false"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch the RSS feed");
                }

                const rssText = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(rssText, "text/xml");
                const items = Array.from(xmlDoc.querySelectorAll("item")).map((item) => {
                    const title = item.querySelector("title")?.textContent || "";
                    const description = item.querySelector("description")?.textContent || "";
                    const date = item.querySelector("dc\\:date")?.textContent || "";
                    const pubDate = item.querySelector("pubDate")?.textContent || "";
                    const link = item.querySelector("link")?.textContent || "";
                    const guid = item.querySelector("guid")?.textContent || "";


                    return {
                        title,
                        description,
                        date,
                        pubDate,
                        link,
                        guid,
                    };
                });
                setRssData(items);
            } catch (error) {
                console.error("Error fetching or parsing RSS feed:", error);
            }
        };

        fetchRssData();
        console.log(props, "empty")
    }, []);


    return (
        <>
            <h1>RSS Data</h1>
            <Container>
            {rssData.map((item, index) => (
                <Col
                    xs={12}
                    md={6}
                    lg={6}
                    xl={4}
                    key={index}
                >
                    <BadgerEventsCard 
                        {...item}
                        username = {props.user?.username || ""}
                        secret = {props.user?.secret || ""} 
                    />
                </Col>
            ))}
            </Container>
        </>
    );
};

export default BadgerEvents;