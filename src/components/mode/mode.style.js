import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  background-color: ${scheme.colors.neutrals[200]};
  margin: 15px;
  padding: 10px;
  border: 1px solid;
  border-radius: 25px;
  width: 330px;
  height: 50px;
`;

export const ModeButton = styled.input`
  background-color: transparent;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  z-index: 10;
  text-align: center;
  cursor: pointer;
`;

export const Span = styled.span`
  display: flex;
`;

export const ButtonLabel = styled.label`
  display: flex;
  cursor: pointer;
  ${(props) => {
    if (props.property === "long") {
      return `
            background-color: ${scheme.colors.primary[500]};
            `;
    } else if (props.property === "short") {
        return `
            background-color: ${scheme.colors.primary[400]};
            `;
    } else if (props.property === "pomodoro") {
        return `
            background-color: ${scheme.colors.primary[300]};
            `;
    } else {
        return `
            background-color: transparent;
            `;
    }
  }}
  font-size: 14px;
  border-radius: 25px;
  border: none;
  padding: 7.5px;
`;

export const Wrapper = styled.div`

`;