import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./App.css"; // Import custom CSS for styling

function App() {
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenerateWishes = () => {
    if (name.trim() !== "") {
      const generatedWishes = [
        `Happy Birthday, ${name}! May your day be filled with joy and laughter.`,
        `Wishing you a fantastic birthday, ${name}! May all your dreams come true.`,
        `Happy Birthday, ${name}! I hope your special day is as wonderful as you are.`,
      ];
      setWishes(generatedWishes);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1 className="text-center mb-4">Birthday Wisher</h1>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
            className="form-control mb-3"
          />
          <Button variant="primary" onClick={handleGenerateWishes} block>
            Generate Wishes
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        {wishes.map((wish, index) => (
          <Col key={index} md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="text-center mb-3">
                    Birthday Wishes
                  </Card.Title>
                  <Card.Text className="text-center">{wish}</Card.Text>
                </div>
                <img
                  src="/birthday.jpg"
                  alt="Birthday"
                  className="img-fluid mt-3"
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
