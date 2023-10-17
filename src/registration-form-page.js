import { Button, Form, Input } from 'antd';

import React from 'react';

const RegistrationForm = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Ici, vous pouvez implémenter la logique d'inscription, par exemple, en envoyant les données au backend.
    };

    return (
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h2>Enregistrez-vous !</h2>
            <Form
                name="registration"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="fullName"
                    label="Nom complet"
                    rules={[
                        {
                            required: true,
                            message: 'Veuillez saisir votre nom complet!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="Adresse e-mail officielle"
                    rules={[
                        {
                            type: 'email',
                            message: "L'adresse e- mail est invalide!",
                        },
                        {
                            required: true,
                            message: 'Veuillez saisir votre adresse e-mail officielle!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Mot de passe"
                    rules={[
                        {
                            required: true,
                            message: 'Veuillez saisir votre mot de passe!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirmer le mot de passe"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Veuillez confirmer votre mot de passe!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Les deux mots de passe ne correspondent pas!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        S'inscrire
                    </Button>
                </Form.Item>
            </Form >
        </div >
    );
};

export default RegistrationForm;
