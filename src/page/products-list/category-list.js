import "./category-list.css"

import { Card, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import axios from 'axios';

const CategoriesList = () => {
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
    }, []);

    return (
        <>
            <h1>Catégories de produits</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {categories.map((item) => (
                    <Card key={item._id} className="card-container">
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ maxWidth: "200px", maxHeight: "150px" }}
                            />
                            <h2>{item.name}</h2>
                        </div>
                    </Card>
                ))}</div >
        </>
    );
};

export default CategoriesList;