// src/components/Home.js
import React from "react";
import CardItem from "./CardItem";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

const imageData = [
  { src: "path/to/image1.jpg", title: "THE CLASSIC" },
  { src: "path/to/image2.jpg", title: "Street Style" },
  { src: "path/to/image3.jpg", title: "Adventure" },
];

const Home = () => {
  return (
    <Container fluid className="home-container">
      <div className="background-image">
        <h1 className="title">THE CLASSIC</h1>
      </div>
      <Row className="card-row">
        {imageData.map((data, index) => (
          <Col key={index} md={4} className="card-col">
            <CardItem src={data.src} title={data.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
