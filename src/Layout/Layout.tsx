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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;
