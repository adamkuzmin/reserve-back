import { Button, Form, Input } from "antd";
import React from "react";
import styled from "styled-components";
import { FormWrapper, Wrapper, Header } from "./__styles";

const Auth = () => {
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <Header>Вход</Header>

          <Form layout="vertical">
            <Form.Item>
              <Input bordered={false} name="username" placeholder="Логин" />
            </Form.Item>

            <Form.Item>
              <Input.Password
                bordered={false}
                name="password"
                placeholder="Пароль"
              />
            </Form.Item>

            <Form.Item>
              <Button>Войти</Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  );
};

export default Auth;
