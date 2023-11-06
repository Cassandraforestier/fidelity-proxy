import React, { useEffect, useState } from "react";

import "./discount-page.css";
import { Button } from "antd";
import QRCode from "react-qr-code";
import { CheckOutlined } from "@ant-design/icons";
import axios from "axios";
import QRCodeExpanded from "../../Components/QRCodeExpanded";

const DiscountPage = ( { thresholds } ) => {
  const [displayQrCode, setDisplayQrCode] = useState(false);
  const [displayWelcomeQrCode, setDisplayWelcomeQrCode] = useState(false);
  const [fidelityPoints, setFidelityPoints] = useState(null);
  const [overlayQrCode, setOverlayQrCode] = useState(false);
  const axios_instence = axios.create({ baseURL: "https://localhost:4000" });
  const subscribeQrCodeValue = '{"reduction": 5, "threshold": 10}';

  useEffect(() => {
    axios_instence
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

  const convertPointsToReductionValue = (loyaltyPoints) => {
    let qrCodeValue = {
      "threshold": -999,
      "reduction": -999
    };
    // Sort the array in ascending order of threshold
    thresholds.sort((a, b) => a.threshold - b.threshold);
  
    for (let i = 0; i < thresholds.length; i++) {
      if (loyaltyPoints >= thresholds[i].threshold) {
        qrCodeValue = thresholds[i];
      } else {
        break; // Exit the loop when the threshold is not met
      }
    }
    console.log(qrCodeValue);
    return qrCodeValue;
    // return closestReduction.toString();
  };
  //pour afficher les qr code
  const handleGenerateWelcomeQrCode = () => {
    setDisplayWelcomeQrCode(!displayWelcomeQrCode);
  };
  const handleGenerateQrCode = () => {
    setDisplayQrCode(!displayQrCode);
  };

  const toggleQrCode = () => {
    setOverlayQrCode(!overlayQrCode);
  };
  return (
    <>
      <div className="presentation">
        <div className="presentation-container">
          <div className="presentation-text">
            <h1>Rien que le meilleur pour vous</h1>
            <p>
              En signe de gratitude pour vos {fidelityPoints} points de fidélité
              nous vous offrons des coupons exclusifs. Profitez-en pleinement !
            </p>
          </div>
          <div className="presentation-img">
            <img src="assets/plante.png" alt="plant decoration" />
          </div>
        </div>
        <div className="coupon-title">
          <div className="coupon-title-icon">
            <CheckOutlined
              className="certified-icon"
              style={{
                fontSize: "18px",
                color: "#285A43",
                marginBottom: "1em",
              }}
            />
          </div>
          <div className="coupon-title-content">
            <p>Coupon</p>
          </div>
        </div>
        {55 >= thresholds[0].threshold ? (
          <>
            <p>
              Félicitation ! Vous avez obtenu un coupon de{" "}
              {convertPointsToReductionValue(fidelityPoints).reduction} % sur votre
              prochain achat. Cliquez sur le bouton en dessous pour générer
              votre QR code
            </p>
            <Button
              className="qrcode-button"
              onClick={handleGenerateQrCode}
              type="primary"
            >
              {displayQrCode ? "Cancel" : "Générer"}
            </Button>
          </>
        ) : (
          <p>
            N'avez pas assez de points de fidélité pour avoir un coupon de
            réduction. Il faut au minimum 30 points
          </p>
        )}
        {displayQrCode ? (
          <div className="qrCode" onClick={toggleQrCode}>
            <QRCode
              size={256}
              value={JSON.stringify(convertPointsToReductionValue(fidelityPoints))}
              viewBox={`0 0 256 256`}
            />
            <span onClick={toggleQrCode} className="souligne">
              Agrandir le QR code
            </span>
            <QRCodeExpanded
              visible={overlayQrCode}
              onClose={toggleQrCode}
              value={JSON.stringify(convertPointsToReductionValue(fidelityPoints))}
            />
          </div>
        ) : null}
        <div className="coupon-title">
          <div className="coupon-title-icon">
            <CheckOutlined
              className="certified-icon"
              style={{
                fontSize: "18px",
                color: "#285A43",
                marginBottom: "1em",
              }}
            />
          </div>
          <div className="coupon-title-content">
            <p>Coupon d'inscription</p>
          </div>
        </div>
        <p>
          Félicitation ! Vous avez obtenu un coupon de 5 % sur votre prochain
          achat. Cliquez sur le bouton en dessous pour générer votre QR code
        </p>
        <Button
          className="qrcode-button"
          onClick={handleGenerateWelcomeQrCode}
          type="primary"
        >
          {displayWelcomeQrCode ? "Cancel" : "Générer"}
        </Button>
        {displayWelcomeQrCode ? (
          <div className="qrCode" onClick={toggleQrCode}>
            <QRCode size={256} value={subscribeQrCodeValue} viewBox={`0 0 256 256`} />
            <span onClick={toggleQrCode} className="souligne">
              Agrandir le QR code
            </span>
            <QRCodeExpanded
              visible={overlayQrCode}
              onClose={toggleQrCode}
              value={subscribeQrCodeValue}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DiscountPage;
