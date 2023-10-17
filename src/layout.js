import "./layout.css";

import { Button, Input } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";

import { Footer } from "antd/es/layout/layout";
import { Menu } from "antd";
import { useState } from "react";

const { Search } = Input;


async function logout() {

}

const Layout = (props) => {
    const [current, setCurrent] = useState("mail");
    const navigate = useNavigate();

    const publicItems = [
        {
            label: <Link to="/">Accueil</Link>,
            key: "Home",
        },
        {
            label: <Link to="/signup">Créer un compte</Link>,
            key: "createAccount",
            className: "menu-item-create",
        },
        {
            label: <Link to="/login">Se connecter</Link>,
            key: "loggin",
        },
    ];
    function handleSearch(value) {

    }

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <div className="navbar">
                {/* <Link to="/">
                    <img alt="logo" src={image} className="logo" />
                </Link> */}

                <div className="menu-general">
                    {props.isLogged ? (
                        <Search
                            placeholder="Rechercher un cosplay"
                            allowClear
                            onSearch={(fileList) => handleSearch(fileList)}
                            className="search"
                        />
                    ) : null}
                    <Menu
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={publicItems}
                        className="menu"
                    />
                </div>
            </div>
            <Outlet />
            <div className="clear"></div>
            <Footer className="footer">
                <hr />
                Fidelity Proxy ©2023
            </Footer>
        </>
    );
};

export default Layout;
