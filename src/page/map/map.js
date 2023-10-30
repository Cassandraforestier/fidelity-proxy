import "../home/home-page.css";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import { Content } from "antd/es/layout/layout";
import { Input } from "antd";
import React from "react";

const { Search } = Input;

const Map = () => {
  return (
    <div>
      <Content>
        <div className="home-container">
          <div className="text-home-container">
            <p>Cherchez des commerçants et artisans</p>
            <p>A proximité de votre position</p>
          </div>
          <div className="bottom-container">
            <div style={{ maxHeight: "50%" }}>
              <Search
                placeholder="Entrez le nom du ville..."
                allowClear
                enterButton="Search"
              />
            </div>
          </div>
        </div>
      </Content>
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MapContainer
          center={[43.7, 7.25]}
          zoom={13}
          style={{ height: "500px", width: "50%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[43.8, 7.26]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
