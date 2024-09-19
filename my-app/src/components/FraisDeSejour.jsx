import React, { useState, useEffect } from "react";
import fraisSejourMSC from "../fraisDeSejourMSC.json";
import fraisSejourCosta from "../fraisDeSejourCosta.json";

const FraisSejour = () => {
  const [frais, setFrais] = useState({});
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    switch (selectedCompany) {
      case "MSC":
        setFrais(fraisSejourMSC);
        break;
      case "Costa":
        setFrais(fraisSejourCosta);
        break;
      default:
        setFrais({});
    }
  }, [selectedCompany]);

  return (
    <div className="frais-container">
      <h1>Frais de Séjour</h1>

      <div className="select-company">
        <select
          id="company-select"
          onChange={(e) => setSelectedCompany(e.target.value)}
          value={selectedCompany}
        >
          <option value="">Sélectionnez une compagnie</option>
          <option value="MSC">MSC</option>
          <option value="Costa">Costa</option>
        </select>
      </div>

      {selectedCompany && Object.keys(frais).length > 0 && (
        <div className="frais-list">
          <h2>Frais de séjour pour {selectedCompany}</h2>
          
          {/* Display the main link to view all details */}
          {frais.link && (
            <div className="main-link">
              <a
                href={frais.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-all-link"
              >
                Voir tous les frais pour {selectedCompany}
              </a>
            </div>
          )}

          {/* Display each fee category */}
          {Object.keys(frais)
            .filter((key) => key !== "link") // Filter out the "link" field
            .map((fraisName) => (
              <div key={fraisName} className="frais-card">
                <h3 className="frais-title">{fraisName}</h3>
                <p className="frais-description">
                  {frais[fraisName].description}
                </p>
                <ul className="frais-features">
                  {frais[fraisName].features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="frais-price">{frais[fraisName].prix}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FraisSejour;
