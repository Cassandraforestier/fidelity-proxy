import './App.css';
import "dayjs/locale/fr";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ConfigProvider } from "antd";
import Connection from './connection-page';
import Home from "./home-page"
import Layout from './layout';
import RegistrationForm from './registration-form-page';
import dayjs from "dayjs";
import frFR from "antd/lib/locale/fr_FR";

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
  return (
    <ConfigProvider
      locale={frFR}
      theme={themeCustomValues}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Connection />} />
            <Route path='/signup' element={<RegistrationForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
