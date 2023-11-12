import { Button, Card, Tag } from 'antd';
import { Link, NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import axiosInstence from '../../tools/axiosInstence';

const { Meta } = Card;
const ProductsByVendor = () => {
    const { vendorId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstence.get(`/vendors/products/${vendorId}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [vendorId]);

    return (
        <>
            <div style={{ marginTop: "16px" }}>
                <NavLink to='/vendors'><Button type="primary">Revenir à la liste des vendeurs</Button></NavLink>
            </div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Les produits de *vendeur*</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {products.map((product) => (
                    <Card
                        hoverable
                        key={product._id}
                        style={{ border: "1px solid grey", margin: '16px', maxWidth: "260px", flex: "1 1 calc(33.33% - 32px)" }}
                        cover={<img
                            src={product.images[0]}
                            alt={product.name}
                            style={{ height: "200px" }}


                        />}
                    >
                        {product.label ? <Tag color="green" style={{ position: "absolute", top: "8px", left: "8px" }}>Produit labellisé par Progville</Tag> : null}
                        <div style={{ display: "flex", flexDirection: "column", alignproducts: "center" }}>
                            <Meta style={{ alignContent: "center", display: "flex", flexDirection: "column" }} title={product.name} description={product.description} />
                            <p style={{ display: "flex", justifyContent: "center" }}>{product.priceHT + product.tva} €</p>
                            <Button type='primary'>Réserver</Button>
                        </div>


                    </Card>
                ))}
            </div>
        </>
    );
}

export default ProductsByVendor;