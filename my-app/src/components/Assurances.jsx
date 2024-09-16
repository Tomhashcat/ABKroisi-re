import React, { useState, useEffect } from "react";
import assurancesMSC from "../assuranceMSC.json";
import assurancesCosta from "../components/assuranceCosta.json";
import assurancesNotre from "../components/assuanceAB.json";

const Assurances = () => {
  const [assurance, setAssurance] = useState({});
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    if (selectedCompany === "MSC") {
      setAssurance(assurancesMSC);
    } else if (selectedCompany === "Costa") {
      setAssurance(assurancesCosta);
    } else if (selectedCompany === "Notre") {
      setAssurance(assurancesNotre);
    } else {
      setAssurance({});
    }
  }, [selectedCompany]);

  return (
    <div className="assurances-container">
      <h1>Assurances</h1>

      <div className="select-company">
        <select
          id="company-select"
          onChange={(e) => setSelectedCompany(e.target.value)}
          value={selectedCompany}
        >
          <option value="">Sélectionnez une compagnie</option>
          <option value="MSC">MSC</option>
          <option value="Costa">Costa</option>
          <option value="Notre">Présence assistance tourisme</option>
        </select>
      </div>

      {selectedCompany && (
        <div>
          {/* Affichage des assurances */}
          {Object.keys(assurance).length > 0 && (
            <div className="assurance-list">
              <h2>Assurances disponibles pour {selectedCompany}</h2>
              {Object.keys(assurance).map((assuranceName) => (
                <div key={assuranceName} className="assurance-card">
                  <h3 className="assurance-title">{assuranceName}</h3>
                  <p className="assurance-description">
                    {assurance[assuranceName].description}
                  </p>
                  <ul className="assurance-coverage">
                    {assurance[assuranceName].coverage && assurance[assuranceName].coverage.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="assurance-prix">{assurance[assuranceName].prix}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Assurances;
