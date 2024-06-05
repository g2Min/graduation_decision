import styled from "styled-components";

export const UploadContainer = styled.div`
  width: 94%;
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ebebeb;
  align-items: center;
  border-radius: 10px;
`;

export const UploadText = styled.div`
  color: #595959;
  leading-trim: both;
  text-edge: cap;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 34px;
  height: 33px;
  &:hover {
    cursor: pointer;
  }
`;

export const ModalButton = styled.button`
  width: 100px;
  border: 1px solid black;
  border-radius: 5px;
`;
