import React, { useEffect } from 'react';
import QRCode from 'qrcode';

function QRCodeGenerator({ data }) {
  useEffect(() => {
    const canvas = document.getElementById('qrcode');

    QRCode.toCanvas(canvas, data, (error) => {
      if (error) console.error(error);
    });
  }, [data]);

  return (
    <canvas id="qrcode" width="200" height="200"></canvas>
  );
}

export default QRCodeGenerator;