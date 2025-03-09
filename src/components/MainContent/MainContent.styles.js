import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fafaf9 !important;
  height: 560px;
  overflow: hidden;
`;

export const TitleBoxWrapper = styled.div`
  padding: 0 16px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  border: 1px solid #ddd;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 4px 16px;
  cursor: pointer;
`;

export const Title = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

export const EmptyList = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const EmptyListLabel = styled.div`
  height: 10px;
  font-size: 30px;
  color: #888;
`;
