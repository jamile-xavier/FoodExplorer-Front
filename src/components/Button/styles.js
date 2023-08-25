import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.5rem;
  border: none;
  gap: 0.8rem;
  justify-content: center;
  margin-top: 4.8rem;
  padding: 1.2rem 1.6rem;
  width: 100%;
`;
