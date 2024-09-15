import React, {  useEffect } from "react";
import "./ShipCard.scss";


const ShipCard = ({ ship }) => {


  return (
   <>
    <div className="ship-card">
      {/* Section de description */}
      <div className="description">
        <h2>{ship.name}</h2>
        <p>Année de lancement: {ship.year}</p>
        <p>Tonnage: {ship.tonnage} tonnes</p>
        <p>Capacité: {ship.capacity} passagers</p>
      </div>

    </div>
</>  
  );
};

export default ShipCard;
