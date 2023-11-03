import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
  background: ${({ theme }) => theme.COLORS.DARK_400};
  width: 100%;
  height: 100vh;
  font-size: 1.2rem;
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
  align-items: center;

  > h3 {
    font-size: 1.2rem;
  }
`;

export const Search = styled.div`
  margin: 3.6rem 2.8rem 0;
  width: 100%;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin: 2.8rem;

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
`;

export const AddDish = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  padding: 1rem;
  margin: 2.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0 2.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  > img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
