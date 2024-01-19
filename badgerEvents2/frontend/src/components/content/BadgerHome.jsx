import React, { memo } from "react"
import { useState, useEffect } from 'react';
import BadgerEventsCard from './BadgerEventsCard'
import { Row, Col, Container, Pagination, Form, Button } from "react-bootstrap";

function BadgerHome() {
    const [rssData, setRssData] = useState([]);

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
                    <BadgerEventsCard {...item} />
                </Col>
            ))}
            </Container>
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