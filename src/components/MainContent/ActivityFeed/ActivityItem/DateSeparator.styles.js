import styled from "styled-components";

export const DateDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #ccc;
  font-size: 8px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 16px 0;
`;

export const Line = styled.span`
  flex: 1;
  border-bottom: 1px dotted #ccc;
  margin: 0 10px;
`;

export const DateText = styled.span`
  color: #bbb;
`;
