import { QrScanner } from '@yudiel/react-qr-scanner'
import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';

const ScannerPage = () => {
    const axios_instence = axios.create({ baseURL: "https://localhost:4000" });
  return (
    <>
    <div style={{width: "50%", height: "auto"}}>
        <QrScanner
            onDecode={(result) => {
                console.log(result);
                toast.success(result);
                // axios_instence.put("/FidelityPoints/1", {
                //     "points": 99
                // }).then((res) => {
                //     console.log(res);
                // }).catch((err) => {
                //     console.log(err);
                // })
            }}
            onError={(error) => console.log(error?.message)}
        />
    </div>

      
    </>
  )
}

export default ScannerPage
