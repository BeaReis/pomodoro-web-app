import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const ClockContainer = styled.div`
  display: flex;
  background-color: ${scheme.colors.neutrals[100]};
  border-radius: 5%;
  border: 5px solid ${scheme.colors.primary[300]};
  @media (max-width: 660px) {
    width: 250px;
    height: 200px;
  }
  width: 300px;
  height: 250px;
  box-shadow: 0 0 10px 5px rgb(160 0 0/ 50%);
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

export const Title = styled.p`
  font-size: 12px;
  border-radius: 50%;
  width: 200px;
  word-wrap: break-word;
  text-align: center;
`;

export const TimeFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  @media (max-width: 660px) {
    font-size: 64px;
  }
  font-size: 80px;
  margin: 20px;
  background-color: transparent;
`;

export const PlayButton = styled.button`
  box-sizing: border-box;
  @media (max-width: 660px) {
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
  @media (max-width: 660px) {
    width: 25px;
    height: 25px;
    border-width: 0 20px 0 0;
  }
  width: 40px;
  height: 40px;
  margin-right: 50px;
  border-width: 0px 25px 0px 0px;
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
