import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "./userProfile-page.css"


const UserProfile = () => {
  return (
    <>
        <Content>
            <div className='profile-page'>
                <h1 id='profile-title'>Mon profile</h1>

                <div className='information'>
                  <p>Nom:</p>
                  <p>Email:</p>
                </div>
            </div>
        </Content>
    </>
  )
}

export default UserProfile
