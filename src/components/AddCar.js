import React from "react";
import axios from "axios";
import { Container, InputGroup, Form, Button, Row, Col } from "react-bootstrap";

//Function renders form for adding new car object to the database
function AddCar() {
  //Form elements save input to state
  const [model, setModel] = React.useState();
  const [make, setMake] = React.useState("");
  const [registrationNumber, setRegistrationNumber] = React.useState("");
  const [owner, setOwner] = React.useState("");

  //Function complies new car object from data in State
  function submitCar() {
    if ((model, make, registrationNumber, owner)) {
      const newCar = {
        model: model,
        make: make,
        registrationNumber: registrationNumber,
        owner: owner,
      };
      //function uses axios post method to add object to database
      axios.post("/cars/add", newCar).then((res) => console.log(res.data));

      window.location = "/";
    } else {
      alert("Please fill out all the information.");
    }
  }

  //Renders form for car data inputs
  return (
    <Container>
      <Container className="bg-secondary rounded py-2 px-2">
        <Row>
          <Col>
            <p className="text-light fs-3 my-auto">Add car </p>
          </Col>
          <Col className="text-end">
            <Button
              variant="outline-light"
              className="fs-5"
              onClick={submitCar}
            >
              Submit details
            </Button>
          </Col>
        </Row>
      </Container>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Model of car : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setModel(e.target.value)}
          placeholder="model (year)"
          type="number"
        />
      </InputGroup>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Make of car : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setMake(e.target.value)}
          placeholder="eg. Toyota"
          type="text"
        />
      </InputGroup>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Registration number : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setRegistrationNumber(e.target.value)}
          placeholder="eg. AAA 1111"
          type="text"
        />
      </InputGroup>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Owner name : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setOwner(e.target.value)}
          placeholder="eg. Sue Jones"
          type="text"
        />
      </InputGroup>
    </Container>
  );
}

export default AddCar;
