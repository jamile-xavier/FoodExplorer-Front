import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border: none;
  border-radius: 0.8rem;
  padding: 1.4rem;

  &::placeholder {
    ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
