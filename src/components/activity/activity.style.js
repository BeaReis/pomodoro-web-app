import styled from 'styled-components';
import scheme from '../../../public/colors.json';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 35px;
  font-size: 12px;
  @media (max-width: 720px) {
    width: 330px;
  }
`;

export const Category = styled.input`
  display: flex;
  border: 1px;
  border-radius: 5px;
  background-color: ${scheme.colors.neutrals[200]};
  padding: 5px;
  color: #FFF;
  width: 100px; 
  height: 35px;
`;

export const Description = styled.input`
  display: flex;
  border: 1px;
  border-radius: 5px;
  background-color: ${scheme.colors.neutrals[200]};
  padding: 5px;
  margin-left: 10px;
  width: 180px;
  height: 35px;
`;

export const AddButton = styled.button`
  background-color: ${scheme.colors.primary[300]};
  border-radius: 5px;
  font-size: 24px;
  width: 35px;
  height: 35px; 
  margin: 0 0 0 10px;
  border: none;
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`;