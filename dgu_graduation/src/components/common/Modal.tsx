import React, {PropsWithChildren} from 'react';
import {
  ModalContainer,
  Backdrop,
  DialogBox,
  ImageBox,
  Close,
  ImgContainer,
  OriginImg,
  DateText,
  TextLayer,
  DateNumber,
  TextSubLayer,
} from './style';
import close from 'assets/icons/cancel.svg';
// import StampComponent from 'components/MyPage/StampComponent';
import {useRecoilState} from 'recoil';
// import stampAtom from 'recoil/stamp/atom';
// import stampListAtom from 'recoil/stamp/atom';

interface ModalDefaultType {
  imageURL?: string | null;
  onClickToggleModal: () => void;
}

const ItemModal = ({
  imageURL,
  onClickToggleModal,
}: // children
PropsWithChildren<ModalDefaultType>) => {
  // const [stamp, setStamp] = useRecoilState(stampListAtom);
  const description = () => {
    return (
      <>
        <TextLayer>
          <DateText>우표 발행일</DateText>
          <DateNumber>24.04.03</DateNumber>
        </TextLayer>
        <TextSubLayer>
          <DateText style={{marginTop: 10}}>함께 제작한 친구</DateText>
          <DateNumber>수비니뱃살, 지담지담, 팀장은이지민</DateNumber>
        </TextSubLayer>
      </>
    );
  };

  return (
    <ModalContainer>
      <DialogBox>
        <ImageBox>
          <Close
            src={close}
            onClick={() => {
              console.log('clicked');
              // setStamp({...stamp, clickable: false});
              // onClickToggleModal();
            }}
          />
        </ImageBox>
        <ImgContainer>
          {/* <StampComponent /> */}
          {description()}
        </ImgContainer>
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
          // setStamp({...stamp, clickable: false});
        }}
      />
    </ModalContainer>
  );
};

export default ItemModal;
