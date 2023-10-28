import "./category-list.css"

import React, { useEffect, useState } from 'react';

import { Card } from 'antd';
import { NavLink } from "react-router-dom";
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
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {categories.map((item) => (
                    <NavLink to={`/category/${item.name}`} key={item._id}><Card
                        hoverable
                        key={item._id}
                        className="card-container"
                        cover={<img
                            src={item.image}
                            alt={item.name}
                            style={{ height: "180px" }}
                        />}
                    >
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                            <h2>{item.name}</h2>
                        </div>
                    </Card></NavLink>
                ))}</div >
        </>
    );
};

export default CategoriesList;