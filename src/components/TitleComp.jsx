import { theme } from "../styles/theme";
import styled from "styled-components";
import Delete from "../images/weui_delete-filled.png";
import Write from "../images/jam_write-f.png";

const Title = () => {
  return (
    <MainDiv>
      <StyledSpan>
        <StyledP>제목</StyledP>
        <StyledDiv />
        <StyledP>제목제목제목</StyledP>
      </StyledSpan>
      <IconDiv>
        <DeleteImg src={Delete} alt="삭제" />
        <WriteImg src={Write} alt="수정" />
      </IconDiv>
    </MainDiv>
  );
};

const IconDiv = styled.div`
  display: flex;
  align-items: center;
`;
const DeleteImg = styled.img`
  float: right;
  width: 40px;
  height: 40px;
`;
const WriteImg = styled.img`
  float: right;
  width: 36px;
  height: 36px;
  margin-left: 20px;
`;
const StyledSpan = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
`;
const StyledDiv = styled.div`
  width: 0;
  height: 40px;
  border-left: 2px solid ${theme.color.gray[300]};
  display: inline;
  margin: 0 56px 0 56px;
`;
const StyledP = styled.p`
  font-size: 24px;
  color: black;
  font-weight: bold;
  line-height: 29px;
  display: inline;
`;
const MainDiv = styled.div`
  width: 1044px;
  height: 68px;
  border-top: 2px solid ${theme.color.gray[300]};
  border-bottom: 2px solid ${theme.color.gray[300]};
  margin-top: 20px;
  padding: 0 24px 0 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Title;