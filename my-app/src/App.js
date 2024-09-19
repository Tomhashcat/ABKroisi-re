import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MSC from "./pages/MSC/MSC";
import Costa from "./pages/Costa/Costa";
import Header from "./components/Header/Header";
import DrinkPackages from "./components/Drinkpackage";
import ForfaitsPackages from "./components/ForfaitPackages";
import Assurances from "./components/Assurances";
import FraisSejour from "./components/FraisDeSejour";

function App() {
  return (
    <Router>
      <Header />
      <FraisSejour /><DrinkPackages /><ForfaitsPackages /><Assurances />
      <Routes>
        <Route path="/msc" element={<MSC />} />
        <Route path="/costa" element={<Costa />} />
      </Routes>
    </Router>
  );
}

export default App;
