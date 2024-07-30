import { theme } from "../styles/theme";
import styled from "styled-components";
import LikeComp from "./LikeComp";
import Comment from "./comentComp";

const DtComment = (props) => {
  return (
    <MainDiv>
      <StyledP>{props.Id}</StyledP>
      <StyledDate>2024.7.28</StyledDate>
      <LikeComp/>
      <Contents>엄</Contents>
      <Comment placeholder="답글 달기"/>
    </MainDiv>
  );
};

const Contents = styled.p`
  display: block;
  font-size: 20px;
  font-weight: lighter;
  margin: 12px 0;
`
const StyledP = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-right: 18px;
  display: inline;
  line-height: 29px;
`;
const StyledDate = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.color.main[500]};
  display: inline;
  margin-top: 5px;
  line-height: 24px;
`;
const MainDiv = styled.div`
  width: 100%;
  height: 136px;
  border-bottom: 2px solid ${theme.color.gray[300]};
  margin-top: 20px;
  display: inline;
`;

export default DtComment;
