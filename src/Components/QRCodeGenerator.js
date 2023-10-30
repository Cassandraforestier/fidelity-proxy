import React, { useEffect } from 'react';

import QRCode from 'qrcode';

function QRCodeGenerator({ data, width, height }) {
  useEffect(() => {
    const canvas = document.getElementById('qrcode');

    QRCode.toCanvas(canvas, data, { width, height }, (error) => {
      if (error) console.error(error);
    });
  }, [data, width, height]);

  return (
    <canvas id="qrcode" width={width} height={height}></canvas>
  );
}

export default QRCodeGenerator;
