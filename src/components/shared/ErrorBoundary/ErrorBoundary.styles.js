import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8d7da;
  padding: 20px;
`;

export const Message = styled.h2`
  color: #721c24;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ErrorDetails = styled.p`
  color: #721c24;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const RetryButton = styled.button`
  background-color: #721c24;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #501218;
  }
`;
