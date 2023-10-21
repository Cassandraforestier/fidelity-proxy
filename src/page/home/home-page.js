import "./home-page.css"

import { CheckOutlined, PercentageOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

import { Content } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const Home = () => {
    return (
        <>
            <Content>
                <div className="home-container">
                    <div className="text-home-container">
                        <p>Gagnez des points de </p>
                        <p>fidelités en faisant vivre les</p>
                        <p>commerces de proximité</p>
                    </div>
                    <div className="bottom-container">
                        <div className="side-left-bottom-container">
                            <p>
                                50 +
                            </p>
                            <p>
                                commerces de proximité
                            </p>
                        </div>
                        <div className="side-right-bottom-container">
                            <p>5 000 +</p>
                            <p>utilisateurs</p>
                        </div>
                    </div>
                </div>
                <Title style={{ display: "flex", justifyContent: "center" }}>A propos de nous</Title>
                <Paragraph style={{ display: "flex", justifyContent: "center", fontSize: "16px", color: "grey" }}>Contribuez  à la vie de votre région en faisant vivre les commerces de proximité </Paragraph>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <div style={{ width: "18em", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <SafetyCertificateOutlined className="certified-icon" style={{ fontSize: "36px", color: "#285A43", marginBottom: "1em" }} />
                        <p style={{ fontWeight: "bold" }}>Points de Fidélité</p>
                        <Paragraph style={{ color: "grey" }}>

                            Gagnez des points de fidélité à chaque achat de produits locaux pour être récompensé lors de vos prochains achats.
                        </Paragraph>

                    </div>
                    <div style={{ width: "18em", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }} >
                        <CheckOutlined className="certified-icon" style={{ fontSize: "36px", color: "#285A43", marginBottom: "1em" }} />
                        <p style={{ fontWeight: "bold" }}>Certification</p>
                        <Paragraph style={{ color: "grey" }}>
                            Les commerçants peuvent soumettre leurs produits pour certification, assurant la qualité et l'authenticité des produits locaux.
                        </Paragraph>
                    </div>
                    <div style={{ width: "18em", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        <PercentageOutlined className="certified-icon" style={{ fontSize: "36px", color: "#285A43", marginBottom: "1em" }} />
                        <p style={{ fontWeight: "bold" }}>Coupons de réduction</p>
                        <Paragraph style={{ color: "grey" }}>
                            Échangez vos points de fidélité contre des coupons de réduction pour économiser sur vos achats de produits locaux préférés via Fidelity Proxy.
                        </Paragraph>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>



                </div>
            </Content >
        </>
    );
};

export default Home;
