import "./category-list.css"

import { Button, Card, Tag } from 'antd';
import { NavLink, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const { Meta } = Card;

const ProductsByCategory = (props) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/products/category/${category}`);
                setProducts(response.data.products);
                console.log("res", response)
            } catch (error) {
                console.error('Error fetching products by category:', error);
            }
        };
        fetchProductsByCategory();
    }, [category]);

    return (
        <div>
            <div style={{ marginTop: "16px" }}>
                <NavLink to='/category'><Button type="primary">Revenir aux catégories</Button></NavLink>
            </div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Produits de la catégorie {category}</h1>
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
                            <Meta style={{ alignContent: "center" }} title={product.name} description={product.description} />
                            <p style={{ display: "flex", justifyContent: "center" }}>{product.priceHT + product.tva} €</p>
                            <Button type='primary'>Réserver</Button>
                        </div>


                    </Card>
                ))}
            </div>

        </div>
    );
};

export default ProductsByCategory;
