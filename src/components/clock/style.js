import styled from 'styled-components';
import scheme from '../../../public/colors.json';


export const ClockContainer = styled.div`
    display: flex;
    background-color: ${scheme.colors.primary[100]};
    border-radius: 50%;
    @media (max-width: 600px) {
        width: 300px;
        height: 300px;
    }
    width: 350px;
    height: 350px;
    margin: auto auto;
    box-shadow: 0 0 10px 5px rgb(0 165 207/ 50%);
`;

export const ClockFrame = styled.div`
    display: flex;
    background-color: ${scheme.colors.neutrals[100]};
    border-radius: 50%;
    width: 95%;
    height: 95%;
    margin: auto auto;
    align-self: center;
`;