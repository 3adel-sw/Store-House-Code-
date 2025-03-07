// src/components/CardItem.js
import React from "react";
import { Card } from "react-bootstrap";
import "./CardItem.css";

const CardItem = ({ src, title }) => (
  <Card className="custom-card">
    <Card.Img variant="top" src={src} className="card-image" />
    <Card.Body>
      <Card.Title className="card-title">{title}</Card.Title>
    </Card.Body>
  </Card>
);

export default CardItem;
