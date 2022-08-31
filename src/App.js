import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CarList from "./components/CarList.js";
import AddCar from "./components/AddCar.js";
import EditCar from "./components/EditCar.js";
import EditMultiple from "./components/EditMultiple.js";
import Navigation from "./components/Navigation.js";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/add" element={<AddCar />} />
        <Route path="/edit" element={<EditCar />} />
        <Route path="/editMulti" element={<EditMultiple />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
