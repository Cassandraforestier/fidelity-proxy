import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const USER_TYPE = ["Commerçant", "Consommateur", "Gestionnaire"];

const Connection = ({ setLogged, setUserType }) => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState(0);
  const onFinish = (values) => {
    setLogged(true);
    navigate("/");
    setUserType(USER_TYPE[selectedUserType]);
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Connectez-vous !</h2>
      <Form name="registration" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "L'adresse e- mail est invalide!",
            },
            {
              required: true,
              message: "Veuillez saisir votre adresse e-mail officielle!",
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
              message: "Veuillez saisir votre mot de passe!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Type d'utilisateur">
          <Radio.Group
            onChange={(e) => setSelectedUserType(e.target.value)}
            value={selectedUserType}
          >
            {USER_TYPE.map((type, index) => (
              <Radio key={index} value={index}>
                {type}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Se connecter
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Connection;
