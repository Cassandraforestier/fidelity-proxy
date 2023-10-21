import "./layout.css";

import { Button, Input } from "antd";
import { Image, Layout } from 'antd';
import { NavLink, Outlet } from "react-router-dom";

import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;
const { Search } = Input;

const LayoutPage = (props) => {
    return (
        <Layout style={{
            backgroundColor: "rgb(40, 90, 67)"
        }}>

            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                style={{ backgroundColor: "rgb(40, 90, 67)", marginTop: "5%" }}
            >
                <Image
                    width={100}
                    style={{ marginLeft: "3em" }}
                    src={process.env.PUBLIC_URL + '/logo.png'}
                />

                <div className="menu">

                    <NavLink to="/" className="menu-link" >Accueil</NavLink>
                    <NavLink to="/signup" className="menu-link">Créer un compte</NavLink>
                    <NavLink to="/login" className="menu-link">Se connecter</NavLink>
                </div>


            </Sider>
            <Layout style={{ backgroundColor: "rgb(40, 90, 67)" }}>
                <Content style={{ margin: '24px 0 0' }}>
                    <div
                        style={{
                            padding: 24,
                            paddingRight: 0,
                            backgroundColor: "white",
                            borderRadius: "25px",
                            marginRight: "25px",
                            minHeight: "800px"
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Search placeholder="Rechercher ..." style={{ width: "80%" }} />
                            <Button><UserOutlined /></Button>
                        </div>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', backgroundColor: "rgb(40, 90, 67)", color: "white" }}>Fidelity Proxy ©2023 Created by <a href="#">this team</a></Footer>
            </Layout>
        </Layout>
    );
};

export default LayoutPage;
