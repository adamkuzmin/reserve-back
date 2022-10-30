import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 560px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 64px;

  display: flex;
  flex-direction: column;

  && > * + * {
    margin-top: 6px;
  }
`;
