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
                <Title className="title-about-us">A propos de nous</Title>
                <Paragraph className="paragraph-about-us">Contribuez  à la vie de votre région en faisant vivre les commerces de proximité </Paragraph>
                <div className="about-us-container">
                    <div className="about-us-column">
                        <SafetyCertificateOutlined className="certified-icon" />
                        <p className="title-about-us-column">Points de Fidélité</p>
                        <Paragraph className="paragraph-column" >
                            Gagnez des points de fidélité à chaque achat de produits locaux pour être récompensé lors de vos prochains achats.
                        </Paragraph>

                    </div>
                    <div className="about-us-column">
                        <CheckOutlined className="certified-icon" />
                        <p className="title-about-us-column">Certification</p>
                        <Paragraph className="paragraph-column" >
                            Les commerçants peuvent soumettre leurs produits pour certification, assurant la qualité et l'authenticité des produits locaux.
                        </Paragraph>
                    </div>
                    <div className="about-us-column">
                        <PercentageOutlined className="certified-icon" />
                        <p className="title-about-us-column">Coupons de réduction</p>
                        <Paragraph className="paragraph-column" >
                            Échangez vos points de fidélité contre des coupons de réduction pour économiser sur vos achats de produits locaux préférés via Fidelity Proxy.
                        </Paragraph>
                    </div>
                </div>
            </Content >
        </>
    );
};

export default Home;
