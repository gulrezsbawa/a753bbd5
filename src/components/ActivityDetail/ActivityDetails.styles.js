import { Card, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  max-width: 600px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const ErrorMessage = styled(Typography)`
  color: red;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  height: 560px;
`;

export const Title = styled.div`
  font-weight: bold;
`;
