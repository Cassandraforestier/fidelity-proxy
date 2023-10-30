import QRCode from 'react-qr-code';
import React from 'react'

const QRCodeExpanded = ({ visible, onClose, value }) => {
  if (!visible) return null;

  return (
    <div className="qrCodeOverlay" onClick={onClose}>
      <div className="qrCodeExpanded">
        <QRCode
          value={value}
        />
      </div>
    </div>
  );
};

export default QRCodeExpanded
