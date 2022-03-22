import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const ClockContainer = styled.div`
  display: flex;
  position: absolute;
  top: 125px;
  background-color: ${scheme.colors.primary[100]};
  border-radius: 50%;
  @media (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
  width: 325px;
  height: 325px;
  box-shadow: 0 0 10px 5px rgb(0 165 207/ 50%);
  z-index: 1;
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
`;

export const PlayButton = styled.button`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border-width: 20px 0px 20px 35px;
  border-style: solid;
  border-color: transparent ${scheme.colors.neutrals[300]};
  margin: 20px 0 0 20px;
  cursor: pointer;
  :hover {
    border-color: transparent ${scheme.colors.primary[200]};
  }
`;

export const PauseButton = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-width: 0px 25px 0px 0px;
  border-style: double;
  border-color: transparent ${scheme.colors.neutrals[300]};
  margin: 20px 20px 0 0;
  cursor: pointer;
  :hover {
    border-color: transparent ${scheme.colors.primary[200]};
  }
`;

export const TimeFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  margin: 15px 15px 0 15px;
  font-size: 80px;
  background-color: transparent;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.play ? "center" : "space-between")};
  align-items: center;
  width: ${(props) => (props.play ? "275px" : "80%")};
  background-color: transparent;
  position: ${(props) => (props.play ? "" : "relative")};
  top: ${props => props.play ? '' : '10px'};
  @media (max-width: 600px) {
    top: ${props => props.play ? '' : '5px'};
  }
`;

export const Button = styled.button`
  background-color: ${props => props.setup ? scheme.colors.neutrals[300] : scheme.colors.primary[200]};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  @media (max-width: 600px) {
    width: 45px;
    height: 45px;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  margin-top: 50px;
  border-radius: 50%;
  width: 200px;
  word-wrap: break-word;
  text-align: center;
`;
