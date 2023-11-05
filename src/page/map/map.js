import "../home/home-page.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Content } from "antd/es/layout/layout";
import { Input } from "antd";
import L from "leaflet";
import React from "react";

const { Search } = Input;


const customIcon = new L.Icon({
  iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const Map = () => {
  const niceMarkers = [
    { position: [43.695, 7.270], popupText: "Fleuriste Le Jardin Enchanté" },
    { position: [43.710, 7.280], popupText: "Ébénisterie Bois d'Art" },
    { position: [43.720, 7.265], popupText: "Fromagerie La Crème de la Crème" },
    { position: [43.715, 7.255], popupText: "Charcuterie La Saveur Gourmande" },
    { position: [43.730, 7.290], popupText: "Restaurant La Bonne Fourchette" },
    { position: [43.705, 7.275], popupText: "Institut de Soins et Bien-Être Zenitude" },
    { position: [43.725, 7.260], popupText: "Couturière L'Atelier de Couture" },
    { position: [43.700, 7.285], popupText: "Artisan Cirier Lueur Magique" },
    { position: [43.710, 7.265], popupText: "Fleuriste Les Fleurs du Soleil" },
    { position: [43.735, 7.295], popupText: "Ébénisterie Bois et Passion" },
    { position: [43.695, 7.268], popupText: "Fromagerie Saveurs Authentiques" },
    { position: [43.706, 7.266], popupText: "Charcuterie Gourmandises du Terroir" },
    { position: [43.715, 7.263], popupText: "Restaurant La Petite Évasion" },
    { position: [43.720, 7.270], popupText: "Institut de Soins et Bien-Être Harmonie" },
  ];

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
          {niceMarkers.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Popup>{marker.popupText}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
