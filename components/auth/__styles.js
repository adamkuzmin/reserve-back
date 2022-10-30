import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0000001f;

  padding: 28px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 350px;

  display: flex;
  flex-direction column;
  align-items: center;

  border-radius: 10px;
  background: white;
  padding: 24px;

  && .ant-form {
    & .ant-form-item {
      margin-bottom: 0px;

      & .ant-btn {
        width: 100%;
        margin-top: 24px;
        height: 80px;
        border-radius: 10px;

        &, &:hover {
            background: black;
            border: 0px;
            font-size: 24px;
            color: white;
        }
      }

      & .ant-input-password {
        position: relative;

        & .ant-input-suffix {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%)
        }
      }

      & .ant-input-password,
      & .ant-form-item-control-input-content > .ant-input {
        height: 90px;
        border: 1px solid grey;
        border-radius: 10px 10px 0 0;

        & *, & *::placeholder, &, &::placeholder {
            text-align: center;
            font-size: 24px
        }
      }

      & .ant-input-password {
        & {
            border-top: 0px;
           border-radius: 0 0 10px 10px;
        }
        
      }
    }
  }
`;

export const Header = styled.div`
  font-size: 18px;
  color: black;

  font-weight: 700;
  margin-bottom: 24px;
`;
