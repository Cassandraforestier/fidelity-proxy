import React from 'react';
import "./QRCodeGenerator.css";

function QRCodeGenerator({ data }) {
  return (
      <img src={data} alt="qrcode pour l'article" />
  );
}

export default QRCodeGenerator;