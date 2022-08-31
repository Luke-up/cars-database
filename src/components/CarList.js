import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";

//Function renders list of all cars in the database
function CarList() {
  //State is used to contain all car objects returned from fetch method
  const [allCars, setAllCars] = React.useState([]);
  //State is used to hold the maximum age of displayed cars
  //Age of the cars is set with select element above the table
  const [year, setYear] = React.useState("");

  //UseEffect fetches the cars object from the server
  useEffect(() => {
    //Age of the cars is calculated by the current year minus the chosen amount of years
    const today = new Date();
    const thisYear = today.getFullYear();
    let searchYears;
    if (year) {
      searchYears = "/" + (thisYear - year);
    } else {
      searchYears = "";
    }
    //Fetch call with the axios library get method
    axios
      .get("http://localhost:5000/cars" + searchYears)
      .then((res) => {
        setAllCars(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [year]);

  //Function deletes car from the database as well as State in this component
  function deleteCar(id) {
    axios
      .delete("http://localhost:5000/cars/delete/" + id)
      .then((res) => console.log(res.data))
      .then(setAllCars(allCars.filter((car) => car._id !== id)));
  }

  //Renders table of all cars in the database
  //Edit button links to separate Route and passes the id of the selected object
  //Via the url parameters
  return (
    <div>
      <Container className="bg-secondary rounded py-2 px-2">
        <Row>
          <Col className="text-light fs-4">Showing Car database</Col>
          <Col>
            <Form.Select onChange={(e) => setYear(e.target.value)}>
              <option value={""}>All cars in database</option>
              <option value={20}>All cars under 20 years</option>
              <option value={15}>All cars under 15 years</option>
              <option value={10}>All cars under 10 years</option>
              <option value={5}>All cars under 5 years</option>
              <option value={3}>All cars under 3 years</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>

      <Table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Make</th>
            <th>Registration</th>
            <th>Owner</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allCars.map((car) => {
            return (
              <tr key={car._id}>
                <td>{car.model}</td>
                <td>{car.make}</td>
                <td>{car.registrationNumber}</td>
                <td>{car.owner}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteCar(car._id);
                    }}
                  >
                    Delete
                  </Button>
                  <Button variant="info">
                    <Link
                      className="text-decoration-none text-dark"
                      to={{ pathname: "/edit/" + car._id }}
                    >
                      Edit
                    </Link>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default CarList;
