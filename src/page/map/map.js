import "../home/home-page.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { Content } from "antd/es/layout/layout";
import { Input } from "antd";
import L from "leaflet";
import React from "react";
// Importez FontAwesome CSS pour les icônes
import 'font-awesome/css/font-awesome.min.css';



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
    
    { position: [43.805, 7.240], popupText: "Fleuriste Le Jardin Enchanté", type: "Fleuriste", phoneNumber:"07 14 35 61 83", nbAvis:"(1050)",
    openingHours: "ferme à 18:30", imageSrc: "https://ac-franchise.com/wp-content/uploads/2017/09/12/20170912155249-a35973211382560fb5c1c7a84afcfb1e.jpg"},
    
    { position: [43.780, 7.300], popupText: "Forgeloup", type: "Cirier", phoneNumber:"07 64 75 21 43", nbAvis:"(145)",
    openingHours: "ferme à 18:30", imageSrc: "https://www.forgeloup.com/img/cms/Banniere/opti/Forgeloup_coffret_40.jpg"},
    
    { position: [43.690, 7.230], popupText: "Pierres De Rosette", type: "Tailleur de pierre", phoneNumber:"07 34 15 23 43", nbAvis:"(295)",
    openingHours: "ferme à 20:00", imageSrc: "https://www.scherberich.com/wp-content/uploads/2022/05/taille.jpg"}, 
    
    { position: [43.710, 7.210], popupText: "Création D'or", type: "Couturier", phoneNumber:"06 24 25 63 93", nbAvis:"(1018)",
    openingHours: "ferme à 18:00", imageSrc: "https://i.pinimg.com/736x/db/12/0c/db120c74799a225a75a467a1529fb1c1.jpg"},
    
    { position: [43.720, 7.220], popupText: "Au Bon Fromager", type: "fromagerie", phoneNumber:"06 14 35 43 63", nbAvis:"(2132)",
    openingHours: "ferme à 22:00", imageSrc: "https://www.saint-ouen.fr/fileadmin/user_upload/fichiers/Pages-Speciales/Zoom-sur/fromagerie-plateaux-3.jpg"},
    
    { position: [43.715, 7.255], popupText: "Charcuterie La Saveur Gourmande", type: "Charcuterie", phoneNumber:"06 24 25 43 63", nbAvis:"(292)",
    openingHours: "ferme à 19:30", imageSrc: "https://mitanchey.fr/wp-content/uploads/2016/09/boucherie-charcuterie-traiteur-mitanchey-dijon-1400x930.jpg"},
    
    { position: [43.735, 7.200], popupText: "Au Jardin du Poitier", type: "Fabricant de poteries", phoneNumber:"06 21 25 93 63", nbAvis:"(67)",
    openingHours: "ferme à 18:30", imageSrc: "https://www.nievre-tourisme.com/uploads/2021/03/en-tete-poteries-guimards-1600x900.jpg"},

    { position: [43.720, 7.190], popupText: "Institut de Soins et Bien-Être Zenitude", type: "Institut de beauté", phoneNumber:"06 31 45 53 63", nbAvis:"(634)",
    openingHours: "ferme à 20:00", imageSrc: "https://images.squarespace-cdn.com/content/v1/5c6ecd5b7980b34fe53673b3/6cad7291-5ca8-4788-a1ab-a60500fd61ec/insitutcaline_cabine-soins.jpg"},
    
    { position: [43.725, 7.260], popupText: "Studio des Fragrances",  type: "Parfumerie", phoneNumber:"06 61 75 13 63", nbAvis:"(2091)",
    openingHours: "ferme à 19:00", imageSrc: "https://www.sainte-maxime.com/files/maxi/parfumerie-fragonard-usine-historique_5723853_4.jpg"},

    { position: [43.700, 7.285], popupText: "Sud Pro Fer" ,  type: "Forgeron", phoneNumber:"06 61 75 13 63", nbAvis:"(650)",
    openingHours: "ferme à 19:30", imageSrc: "https://ferronnerie-gff.fr/wp-content/uploads/2019/10/iron-gate-1623303_1920.jpg"},

    { position: [43.710, 7.265], popupText: "Fleuriste Les Fleurs du Soleil" ,  type: "Fleuriste", phoneNumber:"06 71 75 93 13", nbAvis:"(1650)",
    openingHours: "ferme à 17:30", imageSrc: "https://images.thebusinessplanshop.com/bp-fleuriste/business-plan-fleuriste.jpg"},

    { position: [43.735, 7.295], popupText: "Ébénisterie Bois et Passion" ,  type: "Menuisier", phoneNumber:"06 62 75 12 23", nbAvis:"(1120)",
    openingHours: "ferme à 20:00", imageSrc: "https://www.artisan-ebeniste.com/wp-content/uploads/2019/08/ebeniste-aujourdhui-768x0-c-default.jpg"},

    { position: [43.695, 7.238], popupText: "Golden Blan" ,  type: "Bijoutier", phoneNumber:"06 61 35 53 73", nbAvis:"(340)",
    openingHours: "ferme à 18:00", imageSrc: "https://content.mosaiquefm.net/uploads/content/thumbnails/fermeture_le_7_mars_2019_des_bijouteries_et_ateliers_de_bijoux_1551279952.jpg"},

    { position: [43.706, 7.226], popupText: "La Belle Assise" ,  type: "Tapissier", phoneNumber:"07 51 75 23 63", nbAvis:"(70)",
    openingHours: "ferme à 18:00", imageSrc: "https://www.atelier-du-tapissier.fr/assets/images/slider/header/slide2.jpg"},

    { position: [43.760, 7.253], popupText: "Restaurant La Petite Évasion" ,  type: "Restaurant", phoneNumber:"06 41 75 23 73", nbAvis:"(1053)",
    openingHours: "ferme à 23:30", imageSrc: "https://cdn0.mariages.net/vendor/3746/3_2/960/jpg/img-20180728-175827_3_163746-157348013552565.jpeg"},

    { position: [43.740, 7.275], popupText: "Pain 9" ,  type: "Boulangerie", phoneNumber:"06 61 25 12 61", nbAvis:"(2145)",
    openingHours: "ferme à 21:00", imageSrc: "https://www.mapa-assurances.fr/var/ayaline/storage/images/media/images/vitrine-boulangerie/144824-1-fre-FR/vitrine-boulangerie.jpg"},

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
              <Popup>
              {marker.imageSrc && (<div><span style={{whiteSpace: 'nowrap' }}></span><img style={{ width: '100%', height: '50%' }} src={marker.imageSrc} alt="Image du magasin" /></div>)}
              {marker.popupText && <div><span style={{whiteSpace: 'nowrap', fontWeight: 'bold' }}>{marker.popupText}</span></div>}
              {marker.type && marker.nbAvis && <div><span style={{whiteSpace: 'nowrap' }}><strong>Avis : </strong><span  style={{color: 'gold'}}>&#9733;&#9733;&#9733;&#9733;&#9733; </span>{marker.nbAvis} ⋅ </span>{marker.type} </div>}
              {marker.openingHours && <div><span style={{ color: 'green' ,whiteSpace: 'nowrap' }}>Ouvert ⋅ </span> {marker.openingHours}</div> }
              {marker.phoneNumber && <div><i className="fa fa-phone" style={{ marginRight: '5px' }}></i>{marker.phoneNumber}</div> }
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        
      </div>
    </div>
  );
};

export default Map;
