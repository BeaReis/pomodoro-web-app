import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const SetupContainer = styled.div`
  border: 1px solid ${scheme.colors.primary[100]};
  border-radius: 10px;
  width: 325px;
  height: 500px;
  position: relative;
  top: 100px;
  @media (max-width: 600px) {
    width: 300px;
    height: 450px;
    top: 90px;
  }
`;

export const SetupInnerContainer = styled.div`
    margin: 175px 20px 0 20px ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SetupTitle = styled.p`
    font-size: 14px;
    margin: ${props => props.timeSetup ? '12.5px 0' : '7.5px 0'};
    align-self: flex-start;
    grid-column: 1;
`;

export const TimeWrapper = styled.div`
    display: grid;
    column-gap: 50px;
    margin-top: 15px;
`;

export const SetupInput = styled.input`
    width: 100%;
    height: 30px;
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid ${scheme.colors.primary[100]};
    border-radius: 5px;
    grid-column: 2;
`;
