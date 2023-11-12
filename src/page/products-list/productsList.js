import { Button, Card, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import axiosInstence from '../../tools/axiosInstence';

const { Meta } = Card;


const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstence.get('/products');
                setProducts(response.data.product);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Tous les produits</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {products.map((item) => (
                    <Card
                        hoverable
                        key={item._id}
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
                            <Button type='primary'>Réserver</Button>
                        </div>


                    </Card>
                ))}</div >
        </>
    );
};

export default ProductsList;