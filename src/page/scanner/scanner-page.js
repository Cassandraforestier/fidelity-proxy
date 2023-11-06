import { QrScanner } from "@yudiel/react-qr-scanner";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import "./scanner-page.css";

const ScannerPage = () => {
  const [reductionValue, setReductionValue] = React.useState(null);
  // const axios_instence = axios.create({ baseURL: "https://localhost:4000" });
  const axios_instence = axios.create({ baseURL: "https://192.168.1.134:4000" });
  return (
    <>
      <div className="presentation-container">
        <div className="presentation-text">
          <h1>Mon scanner</h1>
          <p>Vous pouvez scanner le Qr code de votre client afin de connaitre la réduction à effectuer</p>
        </div>
        <div className="presentation-img">
          <img src="assets/plante.png" alt="plant decoration" />
        </div>
      </div>
      <div className="scanner-container">
        <div className="scanner">
          <QrScanner
            scanDelay={2000}
            onDecode={(result) => {
              result = JSON.parse(result);
              axios_instence
                .put("/costumers/fidelityPoints", {
                  userId: "653790802e9a8d5e86dd6a48",
                  fidelityPoints: -result.threshold,
                })
                .then((res) => {
                  toast.success("Les points ont bien été débités");
                  console.log(res);
                  setReductionValue(result.reduction)
                })
                .catch((err) => {
                  console.log(err);
                  // toast.error(JSON.stringify(err));
                });
            }}
            onError={(error) => toast.error(error?.message)}
          />
        </div>
        {reductionValue ? (
          <div className="scanner-text">
            <p>Les points ont bien été débités du compte client. Vous devez octroyer une réduction de -{reductionValue}%</p>
          </div>
        ) : (null)}

      </div>
    </>
  );
};

export default ScannerPage;
