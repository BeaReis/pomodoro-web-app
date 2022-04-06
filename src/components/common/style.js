import styled from 'styled-components';

export const Button = styled.button`

`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 660px) {
        flex-direction: column;
    }
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px 150px;
    @media (max-width: 650px) {
        padding: 0;
    }
`;