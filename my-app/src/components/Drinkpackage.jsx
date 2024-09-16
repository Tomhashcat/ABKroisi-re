import React, { useState, useEffect } from "react";
import drinkPackagesMSC from "../drink_packages_MSC.json"; // Forfaits MSC
import drinkPackagesCosta from "../drink_Packages_Costa.json"; // Forfaits Costa
import drinkPackagesRCCL from "../drink_packages_RCCL.json"; // Forfaits RCCL
import drinkPackagesPonant from "../drink_packages_Ponant.json"; // Forfaits Ponant
import drinkPackagesCelestyal from "../drink_packages_Celestyal.json"; // Forfaits Celestyal

const DrinkPackages = () => {
  const [packages, setPackages] = useState({});
  const [selectedCompany, setSelectedCompany] = useState(""); // Aucun sélectionné par défaut

  useEffect(() => {
    // Charger les forfaits en fonction de la compagnie sélectionnée
    if (selectedCompany === "MSC") {
      setPackages(drinkPackagesMSC);
    } else if (selectedCompany === "Costa") {
      setPackages(drinkPackagesCosta);
    } else if (selectedCompany === "RCCL") {
      setPackages(drinkPackagesRCCL);
    } else if (selectedCompany === "Ponant") {
      setPackages(drinkPackagesPonant);
    } else if (selectedCompany === "Celestyal") {
      setPackages(drinkPackagesCelestyal);
    }
  }, [selectedCompany]);

  return (
    <div className="forfaits-container">
      <h1>Forfaits Boissons</h1>

      {/* Sélection de la compagnie */}
      <div className="select-company">
        <label htmlFor="company-select"></label>
        <select
          id="company-select"
          onChange={(e) => setSelectedCompany(e.target.value)}
          value={selectedCompany}
        >
          <option value="">Sélectionnez une compagnie</option>
          <option value="MSC">MSC</option>
          <option value="Costa">Costa</option>
          <option value="RCCL">RCCL</option> {/* RCCL Option */}
          <option value="Ponant">Ponant</option> {/* Ponant Option */}
          <option value="Celestyal">Celestyal</option> {/* Celestyal Option */}
        </select>
      </div>

      {/* Affichage des forfaits si une compagnie est sélectionnée */}
      {selectedCompany && packages[selectedCompany] && (
        <div className="packages-list">
          <h2>Forfaits disponibles pour {selectedCompany}</h2>

          {/* Lien principal vers les forfaits de la compagnie */}
          {packages[selectedCompany].link && (
            <div className="main-link">
              <a
                href={packages[selectedCompany].link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-all-link"
              >
                Voir tous les forfaits {selectedCompany}
              </a>
            </div>
          )}

          {/* Boucle sur les forfaits de la compagnie */}
          {Object.keys(packages[selectedCompany])
            .filter((key) => key !== "link") // Filtrer la clé "link" pour afficher uniquement les forfaits
            .map((packageName) => (
              <div key={packageName} className="package-card">
                <h3 className="package-title">{packageName}</h3>
                <div className="choix">
                  <p className="package-description">
                    {packages[selectedCompany][packageName].description}
                  </p>
                  <ul className="package-inclusions">
                    {packages[selectedCompany][packageName].inclusions.map(
                      (item, index) => (
                        <li key={index}>{item}</li>
                      )
                    )}
                  </ul>
                  <p className="package-price">
                    {packages[selectedCompany][packageName].prix}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DrinkPackages;
