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
      { to: "proxymity", label: "A proximité" },
      { to: "merchants", label: "Commerçants" },
      { to: "category", label: "Catégories" },
      { to: "fidelityPoints", label: "Points de fidélité" },
      { to: "discount", label: "Coupons de réduction" }
    ],
    Commerçant: [
      { to: "products", label: "Mes produits" },
      { to: "timeTable", label: "Mon emploi du temps" },
      { to: "demands", label: "Mes demandes" }
    ],
    Gestionnaire: [
        { to: "demands", label: "Les demandes" },
        { to: "history", label: "Historique" }
    ]
}
const LayoutPage = ({ logged, userType }) => {
    const navigate = useNavigate();
  return (
    <Layout
      style={{
        backgroundColor: "rgb(40, 90, 67)",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ backgroundColor: "rgb(40, 90, 67)", marginTop: "5%" }}
      >
        <Image
          width={100}
          style={{ marginLeft: "3em" }}
          src={process.env.PUBLIC_URL + "/logo.png"}
        />

        <div className="menu">
          <NavLink to="/" className="menu-link">
            Accueil
          </NavLink>

          {logged ? (
            <>
              {_menuItems[userType].map((label, id) => (
                <NavLink to={label.to} key={id} className="menu-link">
                  {label.label}
                </NavLink>
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
      <Layout style={{ backgroundColor: "rgb(40, 90, 67)" }}>
        <Content style={{ margin: "24px 0 0" }}>
          <div
            style={{
              padding: 24,
              paddingRight: 0,
              backgroundColor: "white",
              borderRadius: "25px",
              marginRight: "25px",
              minHeight: "800px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Search placeholder="Rechercher ..." style={{ width: "80%" }} />
              <Button onClick={() => navigate("/profile")}>
                <UserOutlined />
              </Button>
            </div>
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "rgb(40, 90, 67)",
            color: "white",
          }}
        >
          Fidelity Proxy ©2023 Created by <a href="#">this team</a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
