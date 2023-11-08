import styled from "styled-components";

const getSizeWidth = (size) => {
  switch (size) {
    case "large":
      return "500px";
    case "medium":
      return "250px";
    case "small":
      return "125px";
    case "xsmall":
      return "60px";
    default:
      return "125px";
  }
};

export const StyledButton = styled.button`
  border: 2px solid black;
  border-radius: 12px;
  height: 45px; 
  width: ${(props) => getSizeWidth(props.size)};
  background-color: white;
  cursor: pointer;
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: black;
  text-align: center;

  &:hover {
    border: 2px solid white;
    background-color: #ECBD19;
    transition: 0.5s;
  }
`;

export const Button = StyledButton;
