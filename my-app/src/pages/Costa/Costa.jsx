import React from "react";
import ShipCard from "../../components/ShipCard/ShipCard";
import Notes from "../../components/Notes/Notes";
import DrinkPackages from "../../components/Drinkpackage";
// Données des navires pour Costa
const ships = [
  { id: 1, name: "Costa Smeralda", year: 2019, tonnage: 185010, capacity: 6554 },
  { id: 2, name: "Costa Toscana", year: 2021, tonnage: 185000, capacity: 6554 }
];

const Costa = () => {
  return (
    <div>
      <h1>Costa Croisières</h1>
      <p>Costa Croisières est une compagnie de croisières populaire en Europe...</p>
      <DrinkPackages />
      <div>
        {ships.map((ship) => (
          <ShipCard key={ship.id} ship={ship} />
        ))}
        <div className="notes-container">
          <Notes />
        </div>
      </div>

    </div>
  );
};

export default Costa;
