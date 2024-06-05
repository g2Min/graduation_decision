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

//modal

export const ModalContainer = styled.div`
  width: 100%;
  // width: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 20;
`;

export const Backdrop = styled.div`
  width: 100%;
  // width: inherit;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const DialogBox = styled.dialog`
  // width: 532px;
  width: 40%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  z-index: 20;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled.img`
  width: 20px;
  height: 20px;
  z-index: 40;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const OriginImg = styled.img`
  width: 70%;
  height: 80%;
`;

export const DateText = styled.div`
  color: #191919;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
`;

export const DateNumber = styled.div`
  color: black;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

export const TextLayer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
`;

export const TextSubLayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 180px;
`;

// color item modal style
export const Container = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const CheckBox = styled.div`
  display: flex;
  width: 95%;
  height: 3vh;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 5px; 
  background-color: #82b1e8;
  &:hover{
    cursor: pointer;
  }
`;

export const CheckText = styled.div`
  display: flex;
  color: white;
  font-size: 1rem;
  font-weight: 600;
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;