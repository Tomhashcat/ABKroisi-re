import React, { useState, useEffect } from "react";
import ambianceMSC from "../ambianceMSC.json";
import ambianceCosta from "../ambianceCosta.json";
import ambianceRCCL from "../components/ambiancesRCCL.json"; // Importer RCCL
import ambiancePonant from "../ambiancesPonan.json"; // Importer Ponant
import ambianceCelestyal from "../ambiancesCelestyal.json"; // Importer Celestyal

const ForfaitsPackages = () => {
  const [ambiance, setAmbiance] = useState({});
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    if (selectedCompany === "MSC") {
      setAmbiance(ambianceMSC);
    } else if (selectedCompany === "Costa") {
      setAmbiance(ambianceCosta);
    } else if (selectedCompany === "RCCL") {
      setAmbiance(ambianceRCCL);
    } else if (selectedCompany === "Ponant") {
      setAmbiance(ambiancePonant);
    } else if (selectedCompany === "Celestyal") {
      setAmbiance(ambianceCelestyal);
    } else {
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
          <option value="RCCL">RCCL</option> {/* Option RCCL */}
          <option value="Ponant">Ponant</option> {/* Option Ponant */}
          <option value="Celestyal">Celestyal</option> {/* Option Celestyal */}
        </select>
      </div>

      {selectedCompany && (
        <div>
          {/* Affichage des ambiances */}
          {Object.keys(ambiance).length > 0 && (
            <div className="ambiance-list">
              <h2>Ambiances disponibles pour {selectedCompany}</h2>
              {Object.keys(ambiance).map((ambianceName) => (
                <div key={ambianceName} className="ambiance-card">
                  <h3 className="ambiance-title">{ambianceName}</h3>
                  <p className="ambiance-description">
                    {ambiance[ambianceName].description}
                  </p>
                  <ul className="ambiance-features">
                    {ambiance[ambianceName].features &&
                      ambiance[ambianceName].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ForfaitsPackages;
