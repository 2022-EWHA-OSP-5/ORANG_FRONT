import styled from 'styled-components';
import orangeback from '../../assets/Detail/OrangeBack.svg';

const Button = props => {
  const { children, onClick, width, arrow } = props;
  return (
    <ButtonContainer onClick={onClick} style={{ width: width }}>
      <ButtonText>{children}</ButtonText>
      {arrow ? <Back src={orangeback} /> : null}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div`
  height: 30px;
  background-color: #fff;
  border: 1px solid var(--orange);
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.p`
  color: var(--orange);
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-size: 15px;
  font-weight: 500;
`;

const Back = styled.img`
  margin-left: 8px;
  width: 9px;
  height: 12px;
`;
