import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect } from "react";

function CarList() {
  const [allCars, setAllCars] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars/")
      .then((res) => {
        setAllCars(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function deleteCar(id) {
    axios
      .delete("http://localhost:5000/cars/" + id)
      .then((res) => console.log(res.data))
      .then(setAllCars(allCars.filter((car) => car._id !== id)));
  }

  return (
    <div>
      <h1>Hello List of cars</h1>
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
          {allCars ? (
            allCars.map((car) => {
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
                </td>
              </tr>;
            })
          ) : (
            <p>no cars found</p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CarList;
