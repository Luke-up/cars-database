import axios from "axios";
import React, { useEffect } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

//Function renders list of all cars in the database
function MultiEdit() {
  //State is used to contain all car objects to populate selection menu
  const [allCars, setAllCars] = React.useState([]);
  //State contains input from slect menus and input block
  const [findField, setFindField] = React.useState("");
  const [oldValue, setOldValue] = React.useState("");
  const [newValue, setNewValue] = React.useState("");

  //UseEffect fetches the cars object from the server
  useEffect(() => {
    //Fetch call with the axios library get method
    axios
      .get("/cars")
      .then((res) => {
        setAllCars(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Function to determine content of selection menu
  //either all makes or all owners in database
  function getValues() {
    if (findField == "make") {
      return allCars.map((car) => {
        return (
          <option key={car._id} value={car.make}>
            {car.make}
          </option>
        );
      });
    } else {
      return allCars.map((car) => {
        return (
          <option key={car._id} value={car.owner}>
            {car.owner}
          </option>
        );
      });
    }
  }

  //Post request containing data to be changed
  function updateAll() {
    if (findField == "make") {
      let values = {
        oldValue: oldValue,
        newValue: newValue,
      };
      axios
        .post("/cars/multiple/make", values)
        .then((res) => console.log(res.data));
      window.location = "/";
    } else {
      let values = {
        oldValue: oldValue,
        newValue: newValue,
      };
      axios
        .post("/cars/multiple/owner", values)
        .then((res) => console.log(res.data));
      window.location = "/";
    }
  }

  //Renders selection menus of the data types and corresponding values in this database
  //Text box for inputting new value to replace the old
  return (
    <div>
      <Container className="bg-secondary rounded py-2 px-2">
        <Container className="text-light fs-4">
          Edit all cars in database
        </Container>
        <Row>
          <Col>
            <InputGroup size="md" className="my-2">
              <InputGroup.Text>Field :</InputGroup.Text>
              <Form.Select onChange={(e) => setFindField(e.target.value)}>
                <option>Choose info field</option>
                <option value={"make"}>Make</option>
                <option value={"owner"}>Owner</option>
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup size="md" className="my-2">
              <InputGroup.Text>Existing value</InputGroup.Text>
              <Form.Select
                placeholder="new value"
                onChange={(e) => setOldValue(e.target.value)}
              >
                <option>Select value</option>
                {getValues()}
              </Form.Select>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup size="md" className="my-2">
              <InputGroup.Text>New value</InputGroup.Text>
              <Form.Control
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="new value"
                type="text"
              />
            </InputGroup>
          </Col>
          <Col>
            <Button className="btn-warning w-100" onClick={() => updateAll()}>
              Update all
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MultiEdit;
