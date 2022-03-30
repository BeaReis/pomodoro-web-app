import styled from 'styled-components';
import scheme from '../../../public/colors.json';

export const Nav = styled.nav`
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    top: 0px;
    width: 100%;
    height: 70px;
    background-color: ${scheme.colors.neutrals[100]};
    box-shadow: 0 0 10px 5px rgb(0 0 0/ 50%);
    z-index: 100;
`;

export const NavItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const NavItem = styled.a`
    display: flex;
    background-color: ${scheme.colors.neutrals[100]};
    border-radius: 5px;
    margin: auto 15px;
    cursor: pointer;
`;

export const Login = styled.button`
    padding: 0 15px;
    margin: 0;
    font-size: 14px;
    border: 1px solid ${scheme.colors.primary[100]};
    border-radius: 7px;
    cursor: pointer;
    :hover {
        background-color: ${scheme.colors.primary[100]};
        transition: 0.7s;
    }
`;