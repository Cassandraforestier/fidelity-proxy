import "./vendors-list.css";

import { Button, Card, Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import { NavLink } from "react-router-dom";
import Title from "antd/es/skeleton/Title";
import axios from 'axios';

const { Meta } = Card;
const VendorList = () => {
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/vendors');
                setVendors(response.data.vendors);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Près de chez vous</h1>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
                {vendors.map((item) => (
                    <Card
                        hoverable
                        key={item._id}
                        style={{ border: "1px solid grey", margin: '16px', maxWidth: "260px", flex: "1 1 calc(33.33% - 32px)" }}
                        cover={<img
                            src={item.image}
                            alt={item.name}
                            style={{ height: "200px" }}


                        />}
                    >
                        <Meta style={{ alignContent: "center", display: "flex", flexDirection: "column" }} title={item.storeName} description={item.type} />
                        <p>{item.ProAaddress}</p>
                        <div style={{ bottom: "8px", position: "absolute", right: "60px" }}>
                            <NavLink style={{ marginTop: "20px" }} to={`/vendors/products/${item._id}`} key={item._id}><Button type='primary'>Voir les produits</Button></NavLink>
                        </div>

                    </Card>
                ))}
            </div>
        </>
    )
}
export default VendorList;