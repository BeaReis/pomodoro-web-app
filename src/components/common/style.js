import styled from 'styled-components';
import scheme from '../../../public/colors.json';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 720px) {
        flex-direction: column;
        margin-bottom: 100px;
    }
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin: 30px;
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    width: 350px;
    @media (max-width: 720px) {
        margin: 0;
    }
`;

export const Title = styled.p`
    font-size: ${props => props.category ? '16px' : '30px'};
    text-align: center;
    color: white;
    word-break: break-word;
    margin: ${props => props.category ? '10px' : '0 15px 0 15px'};
    @media (max-width: 720px){
        font-size: ${props => props.category ? '16px' : '24px'};
    }
`;

export const Button = styled.button`
    position: fixed;
    right: 10px;
    margin: 10px;
    border-radius: 50%;
    background-color: ${scheme.colors.primary[100]};
    width: 50px;
    height: 50px;
    @media (max-width: 720px) {
        bottom: 70px;
        z-index: 10;
    }
    @media (min-width: 720px) {
        top: 65px;
    }
`;