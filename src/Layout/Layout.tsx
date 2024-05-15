import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Root>
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
  // background-color: white;
`;

const Container = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;
