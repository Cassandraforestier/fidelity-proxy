import './App.css';
import "dayjs/locale/fr";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoriesList from './page/products-list/category-list';
import { ConfigProvider } from "antd";
import Connection from './page/login/connection-page';
import Home from "./page/home/home-page"
import Layout from './layout';
import ProductsList from './page/products-list/productsList';
import RegistrationForm from './page/signup/registration-form-page';
import UserProfile from './page/profile/userProfile-page';
import dayjs from "dayjs";
import frFR from "antd/lib/locale/fr_FR";
import { useState } from 'react';

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
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/catalog' element={<ProductsList />} />
            <Route path='/category' element={<CategoriesList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
