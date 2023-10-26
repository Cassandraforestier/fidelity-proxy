import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "./userProfile-page.css"
import QRCode from 'react-qr-code'

const UserProfile = () => {
  return (
    <>
        <Content>
            <div className='profile-page'>
                <h1>Mon profile</h1>

                <div className='information'>
                  <p>Nom:</p>
                  <p>Email:</p>
                </div>
                <h1>Mon Qr code </h1>
                <div className='qrCode' style={{ height: "auto", margin: "0 auto", maxWidth: 128, width: "100%" }}>
                  <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={"value"}
                  viewBox={`0 0 256 256`}
                  />
                </div>
            </div>
        </Content>
    </>
  )
}

export default UserProfile
