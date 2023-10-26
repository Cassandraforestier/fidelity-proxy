import { Card, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:4000/categories');
                setCategories(response.data.categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products');
                setProducts(response.data.product);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1>Catégories de produits</h1>
            {categories.map((item) => (
                <h1 key={item._id}>{item.name}</h1>
            ))}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {products.map((item) => (
                    <Card key={item._id} style={{ border: "1px solid grey", margin: '16px', maxWidth: "260px", flex: "1 1 calc(33.33% - 32px)" }}>
                        {item.label ? <Tag color="green">Produit labellisé par Progville</Tag> : <Tag color="red">Produit non labellisé</Tag>}
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img
                                src={item.images[0]}
                                alt={item.name}
                                style={{ maxWidth: "200px" }}
                            />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>{item.category}</p>
                            <p>{item.priceHT + item.tva} €</p>
                        </div>


                    </Card>
                ))}</div >
        </>
    );
};

export default ProductsList;