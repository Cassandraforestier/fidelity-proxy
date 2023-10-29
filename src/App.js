import './App.css';
import "dayjs/locale/fr";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoriesList from './page/products-list/category-list';
import { ConfigProvider } from "antd";
import Connection from './page/login/connection-page';
import DiscountPage from './page/discount/discount-page';
import Home from "./page/home/home-page"
import Layout from './layout';
import Map from './page/map/map';
import ProductsByCategory from './page/products-list/productsByCategory';
import ProductsByVendor from './page/vendors/products-by-vendor';
import ProductsList from './page/products-list/productsList';
import RegistrationForm from './page/signup/registration-form-page';
import UserProfile from './page/profile/userProfile-page';
import VendorList from "./page/vendors/vendors-list"
import dayjs from "dayjs";
import frFR from "antd/lib/locale/fr_FR";
import { useState } from 'react';
import FidelityPage from './page/fidelity/fidelity-page';

dayjs.locale("fr");
const themeCustomValues = {
  token: {
    colorPrimary: "#285a43",
    wireframe: false,
    colorPrimaryBg: "#285a43",
    colorPrimaryBgHover: "#FFF",
    borderRadius: 20,
  },
};
function App() {

  //Savoir si l'utilisateur est conneté
  const [logged, setLogged] = useState(false);
  //Connaitre le type d'utilisateur (client, commerçant, gestionaire) 
  const [userType, setUserType] = useState(null);
  // const thresholds = [30, 60, 120, 240];
  const thresholds = [
    {threshold: 30, reduction: 10},
    {threshold: 60, reduction: 20},
    {threshold: 120, reduction: 30},
    {threshold: 240, reduction: 40},
  ]

  return (
    <ConfigProvider
      locale={frFR}
      theme={themeCustomValues}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout logged={logged} userType={userType} />}>
            <Route index element={<Home logged={logged} />} />
            <Route path='/login' element={<Connection setLogged={setLogged} setUserType={setUserType} />} />
            <Route path='/signup' element={<RegistrationForm />} />
            <Route path='/profile' element={<UserProfile/>}/>
            <Route path='/discount' element={<DiscountPage thresholds={thresholds}/>}/>
            <Route path='/fidelity' element={<FidelityPage thresholds={thresholds}/>} />
            <Route path='/catalog' element={<ProductsList />} />
            <Route path='/category' element={<CategoriesList />} />
            <Route path="/category/:category" element={<ProductsByCategory />} />
            <Route path='/vendors' element={<VendorList />} />
            <Route path="/vendors/products/:vendorId" element={<ProductsByVendor />} />
            <Route path='/map' element={<Map />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
