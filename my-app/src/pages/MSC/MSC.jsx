import React, { useState } from "react";
import ShipCard from "../../components/ShipCard/ShipCard";
import Notes from "../../components/Notes/Notes";
import DrinkPackages from "../../components/Drinkpackage";
// Données des navires pour MSC
const ships = [
  { id: 1, name: "MSC Seaview", year: 2018, tonnage: 154000, capacity: 5179 },
  { id: 2, name: "MSC Meraviglia", year: 2017, tonnage: 171598, capacity: 5714 }
];

const MSC = () => {
  return (
    <div>
      <h1>MSC Croisières</h1>
      <DrinkPackages />
      <p>MSC Croisières est une compagnie de croisières de luxe...</p>
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

export default MSC;
