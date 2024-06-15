import React from 'react';
import './App.css'; // You can create this CSS file for custom styling if needed
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>Item 1</Col>
        <Col>Item 2</Col>
        <Col>Item 3</Col>
      </Row>
    </Container>
  );
}

export default App;
