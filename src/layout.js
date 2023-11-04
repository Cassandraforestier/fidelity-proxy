import "./layout.css";

import { Button, Input } from "antd";
import { Image, Layout } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import React from "react";
import { UserOutlined } from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;
const { Search } = Input;

const _menuItems = {
  Consommateur: [
    { to: "map", label: "A proximité" },
    { to: "catalog", label: "Tous les produits" },
    { to: "category", label: "Par catégories" },
    { to: "vendors", label: "Commerçants" },
    { to: "cart", label: "Panier" },
    { to: "fidelity", label: "Points de fidelité" },
    { to: "discount", label: "Mes coupons" },
  ],
  Commerçant: [
    { to: "products", label: "Mes produits" },
    { to: "timeTable", label: "Emploi du temps" },
    { to: "demands", label: "Mes demandes" },
    { to: "scanner", label: "Mon scanner" },
  ],
  Gestionnaire: [
    { to: "demands", label: "Les demandes" },
    { to: "history", label: "Historique" },
  ],
};
const LayoutPage = ({ logged, userType }) => {
  const navigate = useNavigate();
  return (
    <Layout className="layout">
      <Sider breakpoint="lg" collapsedWidth="0" className="menu-aside">
        <Image
          width={100}
          className="logo-menu"
          src={process.env.PUBLIC_URL + "/logo.png"}
        />

        <div className="menu">
          <NavLink to="/" className="menu-link">
            Accueil
          </NavLink>

          {logged ? (
            <>
              {_menuItems[userType].map((label, id) => (
                <>
                  <NavLink to={label.to} key={id} className="menu-link">
                    {label.label}
                  </NavLink>
                </>
              ))}
            </>
          ) : (
            <>
              <NavLink to="/signup" className="menu-link">
                Créer un compte
              </NavLink>
              <NavLink to="/login" className="menu-link">
                Se connecter
              </NavLink>
            </>
          )}
        </div>
      </Sider>
      <Layout className="layout">
        <Content className="layout-content">
          <div className="main-container">
            <div className="header-search-and-profile">
              {logged ? (
                <>
                  <Search
                    placeholder="Rechercher ..."
                    className="search-input"
                  />
                  <Button type="primary" onClick={() => navigate("/profile")}>
                    <UserOutlined />
                  </Button>
                </>
              ) : null}
            </div>
            <Outlet />
          </div>
        </Content>
        <Footer className="footer">
          Fidelity Proxy ©2023 Created by <a href="#">this team</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
