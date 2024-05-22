import styled from "styled-components";

export const SelectLayer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
`;

export const ButtonLayer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 50px;
`;

export const Container = styled.div`
  width: 100%;
  height: 500px;
  border-top: 2px solid var(--background-color, #FF9315);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 10px 10px;
`;