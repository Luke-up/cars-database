import React, { useEffect } from "react";
import axios from "axios";
import { Container, InputGroup, Form, Button, Row, Col } from "react-bootstrap";

//Function renders form for editing car objects individually
function EditCar() {
  //Response from fetch method is stored in State
  const [model, setModel] = React.useState();
  const [make, setMake] = React.useState("");
  const [registrationNumber, setRegistrationNumber] = React.useState("");
  const [owner, setOwner] = React.useState("");

  //Function uses axios get method to find car object in database
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/cars/edit/" + window.location.pathname.slice(6)
      )
      .then((res) => {
        setModel(res.data.model);
        setMake(res.data.make);
        setRegistrationNumber(res.data.registrationNumber);
        setOwner(res.data.owner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Function sends editted object to server with axios post method
  function submitCar() {
    if ((model, make, registrationNumber, owner)) {
      const newCar = {
        model: model,
        make: make,
        registrationNumber: registrationNumber,
        owner: owner,
      };
      axios
        .post(
          "http://localhost:5000/cars/update/" +
            window.location.pathname.slice(6),
          newCar
        )
        .then((res) => console.log(res.data));
      window.location = "/";
    } else {
      alert("All fields must be filled out.");
    }
  }

  //Renders form elements for car data input
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
              Submit changes
            </Button>
          </Col>
        </Row>
      </Container>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Model of car : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setModel(e.target.value)}
          defaultValue={model}
          type="number"
        />
      </InputGroup>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Make of car : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setMake(e.target.value)}
          defaultValue={make}
          type="text"
        />
      </InputGroup>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Registration number : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setRegistrationNumber(e.target.value)}
          defaultValue={registrationNumber}
          type="text"
        />
      </InputGroup>

      <InputGroup size="lg" className="my-2">
        <InputGroup.Text>Owner name : </InputGroup.Text>
        <Form.Control
          onChange={(e) => setOwner(e.target.value)}
          defaultValue={owner}
          type="text"
        />
      </InputGroup>
    </Container>
  );
}

export default EditCar;
