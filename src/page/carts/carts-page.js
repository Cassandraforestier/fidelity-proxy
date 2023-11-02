import { Button, Card, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import QRCodeGenerator from '../../Components/QRCodeGenerator/QRCodeGenerator';

const { Meta } = Card;


const CartsPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const orders = await axios.get('http://localhost:4000/carts').then((res) =>{
                    if(res.status === 200){
                        return res.data.orders;
                    }
                });
                // setProducts(response.data.product);
                orders.forEach(async (order) => {
                    await axios.get(`http://localhost:4000/products/${order.productId}`).then((res) => {
                        if(res.status === 200){
                            setProducts((prevProducts) => [...prevProducts, res.data.product]);
                        }
                    })

                })
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1>Mon panier</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {products.map((item, id) => (
                    <Card
                        hoverable
                        key={id}
                        style={{ border: "1px solid grey", margin: '16px', maxWidth: "260px", flex: "1 1 calc(33.33% - 32px)" }}
                        cover={<img
                            src={item.images[0]}
                            alt={item.name}
                            style={{ height: "200px" }}


                        />}
                    >
                        {item.label ? <Tag color="green" style={{ position: "absolute", top: "8px", left: "8px" }}>Produit labellisé par Progville</Tag> : null}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Meta style={{ alignContent: "center", display: "flex", flexDirection: "column" }} title={item.name} description={item.description} />
                            <p style={{ display: "flex", justifyContent: "center" }}>{item.priceHT + item.tva} €</p>
                            {item.qrCode ? (
                                <QRCodeGenerator data={item.qrCode}/>
                            ) : (null)}
                        </div>


                    </Card>
                ))}</div >
        </>
    );
};

export default CartsPage;