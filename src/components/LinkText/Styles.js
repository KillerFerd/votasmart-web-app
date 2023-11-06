import styled from 'styled-components';

export const BlackLinkText = styled.p`
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => (props.selected ? 'white' : 'black')};
  text-decoration: none;
  background-color: ${(props) => (props.selected ? '#ECBD19' : 'transparent')};
  border-radius: 12px;
  padding: 0.3rem;

  &:hover {
    color: white;
    background-color: #ECBD19;
    transition: 0.5s;
  }
`;

export const WhiteLinkText = styled.p`
  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: ${(props) => (props.selected ? '#ECBD19' : 'white')};
  text-decoration: none;
  border-radius: 12px;
  padding: 0.3rem;

  &:hover {
    color: #ECBD19;
    transition: 0.5s;
  }
  `;
