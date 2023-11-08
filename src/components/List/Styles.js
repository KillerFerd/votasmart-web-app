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

const getCenterAlignment = (center) => {
  return center ? "center" : "left";
};

export const StyledList = styled.select`
  border: 2px solid black;
  border-radius: 12px;
  padding-left: 10px;
  height: 45px;
  width: ${(props) => getSizeWidth(props.size)};
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: black;
  text-align: ${(props) => getCenterAlignment(props.center)};
`;

export const List = StyledList;
