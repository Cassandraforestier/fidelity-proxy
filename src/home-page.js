import { Content } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const Home = () => {
    return (
        <>
            <Content>
                <Title level={2}>
                    Bienvenue sur Fidelity Proxy : Connectons les Consommateurs et les Artisans Locaux !
                </Title>
                <div>
                    <Paragraph>
                        Vous cherchez à soutenir votre économie locale tout en découvrant des trésors cachés à proximité ? L'application Fidelity Proxy est là pour vous.
                    </Paragraph>

                </div>
                <Title level={2} >
                    Qu&apos;est-ce que Fidelity Proxy vous apporte ?
                </Title>
                <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", margin: "auto" }}>

                    <Title level={3}>
                        Pour les Consommateurs :
                    </Title>
                    <Paragraph>
                        Découvrez des produits locaux uniques et soutenez les artisans de votre communauté. Explorez des catalogues de produits, repérez les produits certifiés "approved by Progville" et gagnez des points de fidélité à chaque achat.
                        <ul>
                            <li>
                                Découvrir les Trésors Locaux : Parcourez les catalogues de produits des artisans locaux et trouvez des articles uniques que vous ne trouverez nulle part ailleurs.
                            </li>
                            <li>
                                Gagnez des Points de Fidélité : Chaque achat vous rapproche de réductions exclusives. Échangez vos points pour économiser davantage sur vos achats futurs.
                            </li>
                            <li>
                                Planifiez Vos Achats : Réservez des produits en ligne, planifiez votre visite en magasin et économisez du temps.
                            </li>
                        </ul>
                    </Paragraph>
                    <Title level={3}>
                        Pour les Artisans :
                    </Title>
                    <Paragraph >
                        Faites briller votre entreprise grâce à notre plateforme. Créez des catalogues de produits, gérez votre emploi du temps et accédez à des outils de fidélisation puissants.
                        <ul>
                            <li>
                                Présentez Vos Créations : Créez et personnalisez des catalogues de produits pour mettre en avant vos œuvres d'art, produits artisanaux, ou spécialités locales.
                            </li>
                            <li>
                                Gérez Votre Emploi du Temps : Définissez vos horaires d'ouverture, indiquez vos jours de disponibilité, et gérez les commandes en toute simplicité.
                            </li>
                            <li>
                                Fidélisez Vos Clients : Attribuez des points de fidélité, offrez des réductions et incitez les consommateurs à revenir pour plus.
                            </li>
                        </ul>
                    </Paragraph>

                </div>
            </Content>
        </>
    );
};

export default Home;
