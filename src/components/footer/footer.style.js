import styled from 'styled-components';
import scheme from '../../../public/colors.json';

export const Foot = styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 70px;
    background-color: ${scheme.colors.neutrals[100]};
    box-shadow: 0 0 5px 2.5px rgb(0 0 0/ 50%);
`;

export const Content = styled.p`
    font-size: 18px;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: auto;
`;