import styled from "styled-components";
import { Button } from "antd";

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-between;
  height: 64px;
  border-radius: 10px;

  padding: 12px;

  background: rgba(0, 0, 0, 0.05);
`;

ItemWrapper.Left = styled.div`
  display: flex;
  align-items: center;

  && > * + * {
    margin-left: 8px;
  }
`;

export const Btn = styled(Button)`
  border-radius: 10px;
  &&,
  && * {
    font-size: 11px;
  }
`;

ItemWrapper.Right = ItemWrapper.Left;

export const Photo = styled.div`
  width: 56px;
  height: 56px;

  background-color: lightgrey;

  ${({ fill }) =>
    fill
      ? `
    background-image: url("${fill}");
    background-size: cover;
  `
      : ``}
`;
