import React, { useState, useEffect } from "react";
import ambianceMSC from "../ambianceMSC.json";
import ambianceCosta from "../ambianceCosta.json";
import ambianceRCCL from "../components/ambiancesRCCL.json"; 
import ambiancePonant from "../ambiancesPonan.json"; 
import ambianceCelestyal from "../ambiancesCelestyal.json"; 

const ForfaitsPackages = () => {
  const [ambiance, setAmbiance] = useState({});
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    switch (selectedCompany) {
      case "MSC":
        setAmbiance(ambianceMSC);
        break;
      case "Costa":
        setAmbiance(ambianceCosta);
        break;
      case "RCCL":
        setAmbiance(ambianceRCCL);
        break;
      case "Ponant":
        setAmbiance(ambiancePonant);
        break;
      case "Celestyal":
        setAmbiance(ambianceCelestyal);
        break;
      default:
        setAmbiance({});
    }
  }, [selectedCompany]);

  return (
    <div className="forfaits-container">
      <h1>Ambiances</h1>

      <div className="select-company">
        <select
          id="company-select"
          onChange={(e) => setSelectedCompany(e.target.value)}
          value={selectedCompany}
        >
          <option value="">Sélectionnez une compagnie</option>
          <option value="MSC">MSC</option>
          <option value="Costa">Costa</option>
          <option value="RCCL">RCCL</option>
          <option value="Ponant">Ponant</option>
          <option value="Celestyal">Celestyal</option>
        </select>
      </div>

      {selectedCompany && Object.keys(ambiance).length > 0 && (
        <div className="ambiance-list">
          <h2>Ambiances disponibles pour {selectedCompany}</h2>
          
          {/* Display the main link to view all ambiances */}
          {ambiance.link && (
            <div className="main-link">
              <a
                href={ambiance.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-all-link"
              >
                Voir tous les détails pour {selectedCompany}
              </a>
            </div>
          )}

          {Object.keys(ambiance)
            .filter((key) => key !== "link") // Filter out the "link" field
            .map((ambianceName) => (
              <div key={ambianceName} className="ambiance-card">
                <h3 className="ambiance-title">{ambianceName}</h3>
                <p className="ambiance-description">
                  {ambiance[ambianceName].description}
                </p>
                <ul className="ambiance-features">
                  {ambiance[ambianceName].features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ForfaitsPackages;
