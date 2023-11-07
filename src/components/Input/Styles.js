import styled from "styled-components";

const getSizeWidth = (size) => {
  switch (size) {
    case 'large':
      return '500px';
    case 'medium':
      return '250px';
    case 'small':
      return '125px';
    default:
      return '125px'; 
  }
};

const getCenterAlignment = (center) => {
  return center ? 'center' : 'left';
};

export const InputBorder = styled.input`
  border: 2px solid black;
  border-radius: 12px;
  padding-left: 10px;
  height: 35px;
  width: ${(props) => getSizeWidth(props.size)}; 
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: black;
  text-align: ${(props) => getCenterAlignment(props.center)}; 
`;

export const InputTrans = styled.input`
  border: none;
  height: 35px;
  width: ${(props) => getSizeWidth(props.size)}; 
  background-color: transparent;
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: black;
  text-align: ${(props) => getCenterAlignment(props.center)}; 
`;
