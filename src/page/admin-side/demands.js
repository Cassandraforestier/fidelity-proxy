import { Avatar, Button, Collapse, List } from "antd";
import React, { useEffect, useState } from "react";

import axiosInstence from "../../tools/axiosInstence";

const { Panel } = Collapse;
const DemandsList = () => {
  const [labelRequests, setlabelRequests] = useState([]);
  useEffect(() => {
    const fetchlabelRequest = async () => {
      try {
        const response = await axiosInstence.get("/labelRequest");
        setlabelRequests(response.data.labelRequest);
      } catch (error) {
        console.error("Error fetching labelRequest:", error);
      }
    };
    fetchlabelRequest();
  }, []);


  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <h1>Demandes de certification de savoir faire : </h1>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={labelRequests}
        renderItem={(labelRequest) => {
          const items = [
            {
              key: "1",
              header: "Informations générales",
              content: <><p>Produit à certifier : {labelRequest.productId.name}</p><p>Informations: {labelRequest.productId.description} </p><p>Prix : {labelRequest.productId.priceHT + labelRequest.productId.tva} €</p></>,
            },
            {
              key: "2",
              header: "Matériaux de fabrication",
              content: <p>{labelRequest.materials}</p>,
            },
            {
              key: "3",
              header: "Procédures",
              content: <p>{labelRequest.process}</p>,
            },
            {
              key: "4",
              header: "Factures",
              content: (
                <div>
                  {labelRequest.invoices.map((image, index) => (
                    <img key={index} src={image} alt={`Invoice ${index + 1}`} />
                  ))}
                </div>
              ),
            }
          ];
          return (<List.Item
            key={labelRequest.title}
            extra={
              <img
                width={100}
                style={{ height: "100px" }}
                alt="logo"
                src={labelRequest.productId?.images[0] || ""}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={labelRequest.vendorId?.image || ""} />}
              title={
                <span>
                  {labelRequest.vendorId?.storeName +
                    " - " +
                    labelRequest.vendorId?.type}
                </span>
              }
              description={
                "Date : " +
                labelRequest.vendorId?.createdAt}
            />
            <Collapse>
              {items.map((item) => (
                <Panel header={item.header} key={item.key}>
                  {item.content}
                </Panel>
              ))}
            </Collapse>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
              <Button type="primary">Valider</Button>
              <Button type="primary" danger>
                Refuser
              </Button>
            </div>
          </List.Item>
          )
        }}
      />
    </>
  );
};

export default DemandsList;
