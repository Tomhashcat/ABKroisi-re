import React, { useState, useEffect } from "react";
import drinkPackagesMSC from "../drink_packages_MSC.json"; // Forfaits MSC
import drinkPackagesCosta from "../drink_Packages_Costa.json"; // Forfaits Costa
import drinkPackagesRCCL from "../drink_Packages_RCCL.json"; // Forfaits RCCL
import drinkPackagesPonant from "../drink_Packages_Ponan.json"; // Forfaits Ponant
import drinkPackagesCelestyal from "../drink_Pacjages_celestyal.json"; // Forfaits Celestyal

const DrinkPackages = () => {
  const [packages, setPackages] = useState({});
  const [selectedCompany, setSelectedCompany] = useState(""); // Aucun sélectionné par défaut

  useEffect(() => {
    // Charger les forfaits en fonction de la compagnie sélectionnée
    switch (selectedCompany) {
      case "MSC":
        setPackages(drinkPackagesMSC);
        break;
      case "Costa":
        setPackages(drinkPackagesCosta);
        break;
      case "RCCL":
        setPackages(drinkPackagesRCCL);
        break;
      case "Ponant":
        setPackages(drinkPackagesPonant);
        break;
      case "Celestyal":
        setPackages(drinkPackagesCelestyal);
        break;
      default:
        setPackages({});
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
      {selectedCompany && packages && (
        <div className="packages-list">
          <h2>Forfaits disponibles pour {selectedCompany}</h2>

          {/* Lien principal vers les forfaits de la compagnie */}
          {packages.link && (
            <div className="main-link">
              <a
                href={packages.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-all-link"
              >
                Voir tous les forfaits {selectedCompany}
              </a>
            </div>
          )}

          {/* Boucle sur les forfaits de la compagnie */}
          {Object.keys(packages)
            .filter((key) => key !== "link") // Filtrer la clé "link" pour afficher uniquement les forfaits
            .map((packageName) => (
              <div key={packageName} className="package-card">
                <h3 className="package-title">{packageName}</h3>
                <div className="choix">
                  <p className="package-description">
                    {packages[packageName].description}
                  </p>
                  <ul className="package-inclusions">
                    {packages[packageName].inclusions &&
                      packages[packageName].inclusions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                  <p className="package-price">
                    {packages[packageName].prix}
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
