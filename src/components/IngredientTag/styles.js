import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  > span {
    display: flex;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 5px;
  }
`;
