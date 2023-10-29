import React from 'react'
import QRCode from 'react-qr-code';

const QRCodeExpanded = ({ visible, onClose, value }) => {
    if (!visible) return null;
  
    return (
      <div className="qrCodeOverlay" onClick={onClose}>
        <div className="qrCodeExpanded">
          <QRCode
            size={512} // La taille agrandie de l'image
            value={value}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    );
  };

export default QRCodeExpanded
