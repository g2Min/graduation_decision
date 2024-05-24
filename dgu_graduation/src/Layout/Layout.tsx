import Header from "components/common/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Root>
      <Header/>
      <Container>
        <Outlet />
      </Container>
    </Root>
  );
};

export default Layout;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  overflow: auto; /* 스크롤바 설정 */
`;

const Container = styled.div`
  width: 100%;
  max-width: 1097px;
  height: 100%;
  flex-grow: 1;
  display: flex;
  padding-top: 50px;
  justify-content: center;
  flex: 1;
  // overflow: auto; /* 스크롤바 설정 */
  // padding: 20px; /* 내용과의 여백 */
  box-sizing: border-box;
`;
