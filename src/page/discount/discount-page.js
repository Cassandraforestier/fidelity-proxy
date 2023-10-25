import React, { useState } from 'react'

import "./discount-page.css"
import { Button } from 'antd'
import QRCode from 'react-qr-code'
import { CheckOutlined } from '@ant-design/icons';

const DiscountPage = () => {
  const [displayQrCode, setDisplayQrCode] = useState(false);
  const [displayWelcomeQrCode, setDisplayWelcomeQrCode] = useState(false);

  const handleGenerateWelcomeQrCode = () => {
    setDisplayWelcomeQrCode(!displayWelcomeQrCode);
  }
  const handleGenerateQrCode = () => {
    setDisplayQrCode(!displayQrCode);
  }
  return (
    <>
      <div className='presentation-container'>
        <div className='presentation-text'>
          <h1>Rien que le meilleur pour vous</h1>
          <p>En signe de gratitude pour vos ... points de fidélité nous vous offrons des coupons exclusifs. Profitez-en pleinement !</p>
        </div>
        <div className='presentation-img'>
          <img src='assets/plante.png' alt='plant decoration'/>
        </div>
      </div>
      <div className='coupon-title'>
        <div className='coupon-title-icon'>
          <CheckOutlined className="certified-icon" style={{ fontSize: "18px", color: "#285A43", marginBottom: "1em" }} />
        </div>
        <div className='coupon-title-content'>
          <p>Coupon</p>
        </div>
      </div>
      <p>Félicitation ! Vous avez obtenu un coupon de ... % sur votre prochain achat. Cliquez sur le bouton en dessous pour générer votre QR code</p>
      <Button onClick={handleGenerateQrCode} type="primary">{displayQrCode ? "Cancel" : "Générer"}</Button>
      {displayQrCode ? (
        <div className='qrCode'>
        <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"value"}
        viewBox={`0 0 256 256`}
        />
      </div>
      ) : (null)}
      <div className='coupon-title'>
        <div className='coupon-title-icon'>
          <CheckOutlined className="certified-icon" style={{ fontSize: "18px", color: "#285A43", marginBottom: "1em" }} />
        </div>
        <div className='coupon-title-content'>
          <p>Coupon d'inscription</p>
        </div>
      </div>
      <p>Félicitation ! Vous avez obtenu un coupon de ... % sur votre prochain achat. Cliquez sur le bouton en dessous pour générer votre QR code</p>
      <Button onClick={handleGenerateWelcomeQrCode} type="primary">{displayWelcomeQrCode ? "Cancel" : "Générer"}</Button>
      {displayWelcomeQrCode ? (
        <div className='qrCode'>
        <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={"value"}
        viewBox={`0 0 256 256`}
        />
      </div>
      ) : (null)}

    </>
  )
}

export default DiscountPage
