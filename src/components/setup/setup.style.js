import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const SetupContainer = styled.div`
  position: relative;
  top: 60px;
  background-color: ${scheme.colors.neutrals[200]};
  border-radius: 10px;
  padding: 10px 15px;
  width: 300px;
  height: 400px;
  @media (max-width: 720px) {
    width: 300px;
    height: 400px;
    margin-top: 20px;
    top: 20px;
  }
`;

export const SetupInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  justify-self: center;
  margin: 5px 0 10px 0;
`;

export const Separator = styled.hr`
  background-color: white;
  width: 100%;
  height: 1px;
`;

export const SetupTitle = styled.p`
  font-size: 14px;
  margin: ${(props) => (props.timeSetup ? "16px 0 0 0" : "12.5px 0 7.5px 0")};
  align-self: flex-start;
  grid-column: 1;
`;

export const TimeWrapper = styled.div`
  display: grid;
  column-gap: ${props => props.sound ? '10px' : '50px'};
  margin: 5px 0 10px 0;
  width: 100%;
`;

export const SetupInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  border: 1px;
  margin: ${(props) => (props.timeSetup ? "10px 0 0 0" : "0")};
  border-radius: 5px;
  grid-column: 2;
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  width: 45px;
  height: 25px;
  padding: 2.5px;
  border-radius: 20px;
  grid-column: 2;
  ${(props) => {
    if (props.property === "active") {
      return`
      background-color: ${scheme.colors.primary[300]};
      `;
    } else {
      return`
      background-color: ${scheme.colors.neutrals[100]};
      `; 
    }
  }};
  transition: 300ms all;
  cursor: pointer;
  margin: 10px 0 0 0;

  ::before {
    content: "";
    transition: 300ms all;
    
    ${(props) => {
      if (props.property === "active") {
        return ` 
          background: white;
          position: relative;
          left: 20px;
      `;
      } else {
        return`
          background: grey;
        `;
      }
    }};
    width: 20px;
    height: 20px;
    border-radius: 35px;
  }
`;

export const Volume = styled.input`
  display: flex;
  justify-self: flex-end;
  margin-top: 20px;
  width: 150px;
  height: 5px;
`;

export const Icon = styled.img`
  width: 40px;
`;