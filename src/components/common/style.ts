import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 100%;
  height: 85px;
  background-color: rgba(255, 144, 14, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 1097px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoIcon = styled.img`
  width: 222px;
  height: 45px;
`;

//nav바
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 38px;
`;

export const NavItem = styled.div`
  display: flex;
  font-size: 23px;
  color: #ebebeb;
  font-weight: 700;
  position: relative; /* 텍스트 주변에 그림자를 추가하기 위해 position을 설정합니다. */
  transition: color 0.3s ease; /* 색상 전환에 대한 트랜지션을 추가합니다. */

  &:hover {
    color: #ffffff;
    text-shadow: 0 0 3px #000; /* 텍스트 주변에 3px 크기의 검정색 그림자를 추가합니다. */
    cursor: pointer;
  }
`;

export const FocusedNavItem = styled.div`
  display: flex;
  font-size: 23px;
  color: #ebebeb;
  font-weight: 700;
  position: relative; /* 텍스트 주변에 그림자를 추가하기 위해 position을 설정합니다. */
  text-shadow: 0 0 3px #000; /* 텍스트 주변에 3px 크기의 검정색 그림자를 추가합니다. */
`;
