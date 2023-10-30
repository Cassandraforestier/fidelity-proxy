import React, { useEffect, useState } from "react";
import axios from "axios";

import { Avatar, Button, List, Skeleton } from "antd";
const DemandsList = () => {
  const [labelRequests, setlabelRequests] = useState([]);
  useEffect(() => {
    const fetchlabelRequest = async () => {
      try {
        const response = await axios.get("http://localhost:4000/labelRequest");
        setlabelRequests(response.data.labelRequest);
      } catch (error) {
        console.error("Error fetching labelRequest:", error);
      }
    };
    fetchlabelRequest();
  }, []);

  return (
    <>
      <h1>Les demandes de certification : </h1>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={labelRequests}
        renderItem={(labelRequest) => (
          <List.Item
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
                labelRequest.vendorId?.createdAt +
                " | Statut : " +
                labelRequest.status +
                " | Commentaire : " +
                labelRequest.comment
              }
            />
            <Button type="primary">Valider</Button>
            <Button type="primary" danger>
              Refuser
            </Button>
          </List.Item>
        )}
      />
    </>
  );
};

export default DemandsList;
