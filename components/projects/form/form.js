import React from "react";
import styled from "styled-components";

import { Form, Input, Button, Space } from "antd";
import Upload from "./upload/upload";
import { Wrapper } from "./__styles";
import Description from "./description/description";
import Link from "next/link";

const FormFragment = ({ initialValues, pid }) => {
  const handleFinish = async (data = {}) => {
    const { cover_vertical = [], cover_horizontal = [], ...otherData } = data;

    const handleSingleImage = (img_arr) => {
      if (img_arr.length > 0) {
        const [img] = img_arr;
        const { _id } = img;

        return {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: _id,
          },
        };
      }
    };

    await fetch("/api/projects/add", {
      method: "POST",
      body: JSON.stringify({
        cover_vertical: handleSingleImage(cover_vertical),
        cover_horizontal: handleSingleImage(cover_horizontal),
        ...otherData,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("response", response);
      });
  };

  const requiredCfgs = {
    required: true,
    message: "Please input your username!",
  };

  return (
    <>
      <Wrapper>
        <Space style={{ marginBottom: "24px" }}>
          <Link href="/projects">
            <Button>Ко всем проектам</Button>
          </Link>
        </Space>

        <Form {...{ initialValues }} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="Название (на русском)"
            name="nameru"
            rules={[requiredCfgs]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Название (на английском)"
            name="nameen"
            rules={[requiredCfgs]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="description"
            rules={[requiredCfgs]}
          >
            <Description />
          </Form.Item>

          <Form.Item
            label="location_name"
            name="location_name"
            rules={[requiredCfgs]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="cover_vertical"
            name="cover_vertical"
            rules={[requiredCfgs]}
          >
            <Upload />
          </Form.Item>

          <Form.Item
            label="cover_horizontal"
            name="cover_horizontal"
            rules={[requiredCfgs]}
          >
            <Upload />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
};

export default FormFragment;
