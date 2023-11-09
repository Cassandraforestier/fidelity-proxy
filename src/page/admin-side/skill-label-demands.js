import { Avatar, Button, Collapse, List } from "antd";
import React, { useEffect, useState } from "react";

import axios from "axios";

const { Panel } = Collapse;

const SkillLabelList = () => {
    const [skillLabels, setSkillLabels] = useState([]);

    useEffect(() => {
        const fetchSkillLabels = async () => {
            try {
                const response = await axios.get("http://localhost:4000/skillLabel");
                setSkillLabels(response.data.skillLabels);
            } catch (error) {
                console.error("Error fetching skillLabels:", error);
            }
        };
        fetchSkillLabels();
    }, []);

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <h1>Les demandes de label de savoir-faire :</h1>
            <List
                itemLayout="vertical"
                size="large"
                dataSource={skillLabels}
                renderItem={(skillLabel) => {
                    const items = [
                        {
                            key: "1",
                            header: "Informations générales",
                            content: (
                                <>
                                    <p>ID : {skillLabel._id}</p>
                                    <p>Statut : {skillLabel.status}</p>
                                    <p>Date de création : {skillLabel.createdAt}</p>
                                </>
                            ),
                        },
                        {
                            key: "2",
                            header: "Matériaux de fabrication",
                            content: (
                                <>
                                    <p>{skillLabel.materials}</p>
                                </>
                            ),
                        },
                        {
                            key: "3",
                            header: "Procédures de fabrication",
                            content: (
                                <>
                                    <p>Procédures : {skillLabel.process}</p>
                                </>
                            ),
                        },
                        {
                            key: "4",
                            header: "Commentaires",
                            content: (
                                <>
                                    <p>Commentaire : {skillLabel.comment}</p>
                                </>
                            ),
                        }
                    ];

                    return (
                        <List.Item
                            key={skillLabel._id}
                            extra={
                                <img
                                    width={100}
                                    style={{ height: "100px" }}
                                    src="Image URL"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src="Image URL" />}
                                title={<span>ID : {skillLabel._id}</span>}
                                description={`Statut : ${skillLabel.status}`}
                            />
                            <Collapse>
                                {items.map((item) => (
                                    <Panel header={item.header} key={item.key}>
                                        {item.content}
                                    </Panel>
                                ))}
                            </Collapse>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-evenly",
                                    marginTop: "10px",
                                }}
                            >
                                <Button type="primary">Valider</Button>
                                <Button type="primary" danger>
                                    Refuser
                                </Button>
                            </div>
                        </List.Item>
                    );
                }}
            />
        </>
    );
};

export default SkillLabelList;
