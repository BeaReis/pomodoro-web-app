import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const ClockContainer = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid;
  box-shadow: 0 0 10px 5px rgb(160 0 0/ 50%);
  ${(props) => {
    if (props.mode === "long") {
      return `
            border-color: ${scheme.colors.primary[600]};
            box-shadow: 0 0 10px 5px rgb(255 255 255/ 50%);
            `;
    } else if (props.mode === "short") {
        return `
            border-color: ${scheme.colors.primary[400]};
            box-shadow: 0 0 10px 5px rgb(0 146 44/ 50%);
            `;
    } else {
        return `
            border-color: ${scheme.colors.primary[300]};
            `;
    }
  }}
  background-color: ${scheme.colors.neutrals[100]};
  border-radius: 5%;
  @media (max-width: 720px) {
    width: 250px;
    height: 200px;
  }
  width: 300px;
  height: 250px;
  z-index: 1;
  margin: 20px 0;
`;

export const ClockFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${scheme.colors.neutrals[100]};
  border-radius: 50%;
  width: 95%;
  height: 95%;
  align-items: center;
  padding: 15px;
  gap: 20px;
`;


export const TimeFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100px;
  @media (max-width: 720px) {
    font-size: 64px;
  }
  font-size: 80px;
  
  background-color: transparent;
`;

export const PlayButton = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-width: 20px 0px 20px 35px;
  border-style: solid;
  border-color: transparent ${scheme.colors.neutrals[300]};
  cursor: pointer;
  :hover {
    border-color: transparent ${scheme.colors.primary[200]};
  }
  @media (max-width: 720px) {
    width: 25px;
    height: 25px;
    border-width: 15px 0px 15px 25px;
  }
`;

export const PauseButton = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-width: 0px 0px 0px 25px;
  border-style: double;
  border-color: transparent ${scheme.colors.neutrals[300]};
  cursor: pointer;
  :hover {
    border-color: transparent ${scheme.colors.primary[200]};
  }
  @media (max-width: 720px) {
    width: 30px;
    height: 30px;
    border-width: 0 20px 0 0;
  }
`;

export const StopButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: ${scheme.colors.neutrals[300]};
  border: none;
  cursor: pointer;
  :hover {
    background-color: ${scheme.colors.primary[200]};
  }
  @media (max-width: 720px) {
    width: 30px;
    height: 30px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
  background-color: transparent;
`;
