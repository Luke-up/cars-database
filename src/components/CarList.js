import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function CarList() {
  const [allCars, setAllCars] = React.useState([]);
  const [year, setYear] = React.useState("");

  useEffect(() => {
    const today = new Date();
    const thisYear = today.getFullYear();
    let searchYears;
    if (year) {
      searchYears = "/" + (thisYear - year);
    } else {
      searchYears = "";
    }
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

  function deleteCar(id) {
    axios
      .delete("http://localhost:5000/cars/delete/" + id)
      .then((res) => console.log(res.data))
      .then(setAllCars(allCars.filter((car) => car._id !== id)));
  }

  return (
    <div>
      <h1>Hello List of cars</h1>
      <select onChange={(e) => setYear(e.target.value)}>
        <option value={" "}>All cars</option>
        <option value={20}>under 20 years</option>
        <option value={15}>under 15 years</option>
        <option value={10}>under 10 years</option>
        <option value={5}>under 5 years</option>
        <option value={3}>under 3 years</option>
      </select>
      <table>
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
                  <button
                    onClick={() => {
                      deleteCar(car._id);
                    }}
                  >
                    Delete
                  </button>
                  <Link to={{ pathname: "/edit/" + car._id }}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default CarList;
