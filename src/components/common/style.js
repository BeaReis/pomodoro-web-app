import styled from 'styled-components';

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
        padding: 10px;
    }
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.p`
    font-size: ${props => props.category ? '16px' : '32px'};
    text-align: center;
    color: white;
    margin: ${props => props.category ? '10px' : '0 15px 0 15px'};
    @media (max-width: 720px){
        font-size: ${props => props.category ? '16px' : '24px'};
    }
`;