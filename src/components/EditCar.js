import React, { useEffect, useParams } from "react";
import axios from "axios";
import id from "./CarList";

function EditCar(props) {
  const [model, setModel] = React.useState();
  const [make, setMake] = React.useState("");
  const [registrationNumber, setRegistrationNumber] = React.useState("");
  const [owner, setOwner] = React.useState("");
  const [carObject, setCarObject] = React.useState([{}]);

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return (
    <div>
      <h1>Edit car</h1>
      <label>Model of car : </label>
      <input
        onChange={(e) => setModel(e.target.value)}
        defaultValue={model}
        type="number"
      />
      <br />
      <label>Make of car : </label>
      <input
        onChange={(e) => setMake(e.target.value)}
        defaultValue={make}
        type="text"
      />
      <br />
      <label>Registration number : </label>
      <input
        onChange={(e) => setRegistrationNumber(e.target.value)}
        defaultValue={registrationNumber}
        type="text"
      />
      <br />
      <label>Owner name : </label>
      <input
        onChange={(e) => setOwner(e.target.value)}
        defaultValue={owner}
        type="text"
      />
      <button onClick={() => submitCar()}>Submit changes</button>
    </div>
  );
}

export default EditCar;
