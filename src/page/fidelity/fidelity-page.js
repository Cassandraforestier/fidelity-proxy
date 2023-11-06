import React, { useEffect, useState } from "react";
import "./fidelity-page.css";
import { Button, Timeline } from "antd";
import axios from "axios";
import { NavLink } from "react-router-dom";

const FidelityPage = ( { thresholds } ) => {
  const frontColor = "#285a43";
//   const thresholds = [30, 60, 120, 240];
  const axios_instense = axios.create({ baseURL: "https://127.0.0.1:4000" });
  const [fidelityPoints, setFidelityPoints] = useState(null);
  useEffect(() => {
    axios_instense
      .get(`/costumers/fidelityPoints?userId=653790802e9a8d5e86dd6a48`)
      .then((res) => {
        if (res.status === 200) {
          setFidelityPoints(res.data.FidelityPoints);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [fidelityPoints]);
  //fonction qui retourne la couleur des points de progression de la timeline
  const getPointColor = (points, threshold) => {
    return points >= threshold ? frontColor : "grey";
  };
  //fonction qui retourne le nb de points qui manque avant d'atteindre un palier
  const closeToThreshold = (currentPoints) => {
    let remains = null;
    thresholds.some((threshold) => {
      if (currentPoints < threshold.threshold) {
        remains = threshold.threshold - currentPoints;
        return true;
      }
      return false;
    });
    return remains;
  };
  return (
    <>
      <div className="fidelity-left-content">
        <h1 style={{ color: frontColor }}>Mes points de fidélités </h1>
        <p id="points">
          {fidelityPoints} {fidelityPoints > 1 ? "Points" : "Point"}
        </p>
      </div>

      <div className="fidelity-progress">
        <div className="fidelity-timeline fidelity-left-content">
          <Timeline
            items={[
              {
                color: getPointColor(fidelityPoints, thresholds[0].threshold),
                children:
                  `Avec seulement 30 points, vous débloquez une réduction de ${thresholds[0].reduction}% dans les magasins à proximité. Faites des économies tout en faisant vos achats chez nous !`,
              },
              {
                color: getPointColor(fidelityPoints, thresholds[1].threshold),
                children:
                  `Avec seulement 60 points, vous débloquez une réduction de ${thresholds[1].reduction}% dans les magasins à proximité. Faites des économies tout en faisant vos achats chez nous !`,
              },
              {
                color: getPointColor(fidelityPoints, thresholds[2].threshold),
                children:
                  `Avec seulement 120 points, vous débloquez une réduction de ${thresholds[2].reduction}% dans les magasins à proximité. Faites des économies tout en faisant vos achats chez nous !`,
              },
              {
                color: getPointColor(fidelityPoints, thresholds[3].threshold),
                children:
                  `Avec seulement 240 points, vous débloquez une réduction de ${thresholds[3].reduction}% dans les magasins à proximité. Faites des économies tout en faisant vos achats chez nous !`,
              },
            ]}
          />
          {fidelityPoints < thresholds[3].threshold ? (
            <>
              <div className="fidelity-resume">
                <p>
                  Plus que {closeToThreshold(fidelityPoints)} points pour
                  débloquer le prochain palier
                </p>
                <Button id="convertLocation" type="primary"><NavLink to="/discount" className="menu-link">Convertir mes points </NavLink></Button>
              </div>
            </>
          ) : (
            <div className="fidelity-resume">
                <>
                    <p>Vous avez atteint le nombre maximal de points de fidelité. N'hesitez pas à les utiliser !</p>
                    <Button id="convertLocation" type="primary"><NavLink to="/discount" className="menu-link">Convertir mes points </NavLink></Button>
                </>
            </div>
          )}
        </div>
        <div className="fidelity-container">
          <img src="assets/plante.png" alt="plant decoration" />
        </div>
      </div>
    </>
  );
};

export default FidelityPage;
