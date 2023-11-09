import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

import axios from "axios";

const SkillLabelForm = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);

        try {
            // Envoyez les données du formulaire au serveur pour ajouter une demande de label de savoir-faire
            const requestData = {
                vendorId: "6534fb68b0c8e5096100d0fb",
                status: "en_attente",
                materials: values.materials,
                process: values.process,
                comment: values.comment,
            };

            const response = await axios.post("http://localhost:4000/skillLabel", requestData);

            if (response.data.success) {
                message.success("Demande de label de savoir-faire ajoutée avec succès.");
                form.resetFields();
            } else {
                message.error("Erreur lors de l'ajout de la demande de label de savoir-faire.");
            }
        } catch (error) {
            message.error("Erreur lors de la communication avec le serveur.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2 style={{ display: "flex", flexDirection: "column", paddingTop: "25px", alignItems: "center" }}> Demander la certification de mon savoir-faire</h2>
            <Form form={form} name="skillLabelRequestForm" onFinish={onFinish} layout="vertical" style={{ display: "flex", flexDirection: "column", paddingTop: "25px", alignItems: "center" }}>
                <p style={{ width: "60%" }}>Vous pouvez demander la certification de votre savoir-faire en remplissant le formulaire ci-dessous. Une fois que vous avez soumis la demande, elle sera examinée par notre équipe de certification.
                    Veillez à bien expliquer vos procédures de création artisanale ainsi qu'à nous donner une maximum d'informations que vous jugerez utiles.</p>
                <Form.Item
                    name="materials"
                    label="Matériaux de fabrication"
                    rules={[
                        {
                            required: true,
                            message: "Veuillez entrer les matériaux de fabrication",
                        },
                    ]}
                    style={{ width: "70%" }}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name="process"
                    label="Procédures de production"
                    rules={[
                        {
                            required: true,
                            message: "Veuillez entrer les procédures de production",
                        },
                    ]}
                    style={{ width: "70%" }}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    name="comment"
                    label="Commentaire"
                    rules={[
                        {
                            required: true,
                            message: "Veuillez entrer un commentaire",
                        },
                    ]}
                    style={{ width: "70%" }}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Valider ma demande
                    </Button>
                </Form.Item>
                <p style={{ width: "55%" }}>Une fois votre demande soumise, vous recevrez une notification concernant l'état de votre certification. Vous pouvez suivre son état dans votre tableau de bord.</p>
            </Form>
        </>
    );
};

export default SkillLabelForm;
