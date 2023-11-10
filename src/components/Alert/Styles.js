import styled from "styled-components";

export const Div = styled.div`
  margin: 1rem;
  padding: 1rem;

  border-radius: 12px;
  background-color: ${(props) => props.backgroundColor || '#AFC5C0'};
  width: 100%;
`;
