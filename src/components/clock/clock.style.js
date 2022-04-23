import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const ClockContainer = styled.div`
  display: flex;
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
  justify-content: center;
  background-color: ${scheme.colors.neutrals[100]};
  border-radius: 50%;
  width: 95%;
  height: 95%;
  margin: auto auto;
  align-items: center;
  padding: 15px;
`;


export const TimeFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  @media (max-width: 720px) {
    font-size: 64px;
  }
  font-size: 80px;
  margin: 20px;
  background-color: transparent;
`;

export const PlayButton = styled.button`
  box-sizing: border-box;
  @media (max-width: 720px) {
    width: 25px;
    height: 25px;
    border-width: 15px 0px 15px 25px;
  }
  width: 35px;
  height: 35px;
  border-width: 20px 0px 20px 35px;
  border-style: solid;
  border-color: transparent ${scheme.colors.neutrals[300]};
  cursor: pointer;
  :hover {
    border-color: transparent ${scheme.colors.primary[200]};
  }
`;

export const PauseButton = styled.button`
  box-sizing: border-box;
  @media (max-width: 720px) {
    width: 30px;
    height: 30px;
    border-width: 0 20px 0 0;
  }
  width: 40px;
  height: 40px;
  margin-right: 50px;
  border-width: 0px 30px 0px 0px;
  border-style: double;
  border-color: transparent ${scheme.colors.neutrals[300]};
  cursor: pointer;
  :hover {
    border-color: transparent ${scheme.colors.primary[200]};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 275px;
  background-color: transparent;
`;
