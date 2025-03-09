import styled from "styled-components";

export const Wrapper = styled.div`
  height: 40px;
  flex: 6;
  align-items: center;
`;

export const NumberWrapper = styled.div`
  height: 20px;
  padding: 4px 32px 4px 0px;
  display: flex;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const NumberTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #545454;
  margin-right: 4px;
`;

export const Badge = styled.div`
  background: #fc5423;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 4px;
  border-radius: 12px;
`;

export const SubTitle = styled.div`
  font-size: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #aaaaaa;
`;
