import styled from "styled-components";
import scheme from "../../../public/colors.json";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  font-size: 12px;
  @media (max-width: 720px) {
    width: 330px;
    flex-direction: column;
    align-content: space-between;
  }
`;

export const Category = styled.input`
  display: flex;
  border: 1px;
  border-radius: 5px;
  background-color: ${scheme.colors.neutrals[200]};
  padding: 5px;
  color: #fff;
  width: 150px;
  height: 35px;
  margin: 10px 0 0 0;
  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const Description = styled.input`
  display: flex;
  border: 1px;
  border-radius: 5px;
  background-color: ${scheme.colors.neutrals[200]};
  padding: 5px;
  margin: 10px 0 0 10px;
  width: 290px;
  height: 35px;
  @media (max-width: 720px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
`;

export const AddButton = styled.button`
  background-color: ${scheme.colors.primary[300]};
  border-radius: 5px;
  font-size: 24px;
  width: 35px;
  height: 35px;
  margin: 10px 0 0 10px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 720px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
`;
