import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;

  ${({ fill }) =>
    fill
      ? `
  & {
    background-image: url("${fill}");
    background-size: cover;
    
    & .ant-upload {
        background: none;
        border: 0
    }
  }
  `
      : ``}
`;
