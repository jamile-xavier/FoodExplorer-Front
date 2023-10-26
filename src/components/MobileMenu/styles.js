import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.aside`
  background: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;

  display: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  position: absolute;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform 0.3s ease;

  &[data-menu-is-open="true"] {
    display: flex;
    flex-direction: column;
    transform: translateX(0);
  }
`;

export const Header = styled.header`
  background: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  gap: 1.6rem;
  padding: 2.8rem;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    margin-right: 2rem;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  gap: 1rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
