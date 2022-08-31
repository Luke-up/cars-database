import React from "react";
import axios from "axios";

function AddCar() {
  const [model, setModel] = React.useState();
  const [make, setMake] = React.useState("");
  const [registrationNumber, setRegistrationNumber] = React.useState("");
  const [owner, setOwner] = React.useState("");

  function submitCar() {
    if ((model, make, registrationNumber, owner)) {
      const newCar = {
        model: model,
        make: make,
        registrationNumber: registrationNumber,
        owner: owner,
      };
      console.log(newCar);

      axios
        .post("http://localhost:5000/cars/add", newCar)
        .then((res) => console.log(res.data));

      window.location = "/";
    } else {
      alert("Please fill out all the information.");
    }
  }

  return (
    <div>
      <h1>Hello Add cars</h1>
      <label>Model of car : </label>
      <input
        onChange={(e) => setModel(e.target.value)}
        placeholder="model (year)"
        type="number"
      />
      <br />
      <label>Make of car : </label>
      <input
        onChange={(e) => setMake(e.target.value)}
        placeholder="eg. Toyota"
        type="text"
      />
      <br />
      <label>Registration number : </label>
      <input
        onChange={(e) => setRegistrationNumber(e.target.value)}
        placeholder="eg. AAA 1111"
        type="text"
      />
      <br />
      <label>Owner name : </label>
      <input
        onChange={(e) => setOwner(e.target.value)}
        placeholder="eg. Sue Jones"
        type="text"
      />
      <button onClick={submitCar}>Add car</button>
    </div>
  );
}

export default AddCar;
