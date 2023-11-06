import styled from "styled-components";

export const ContenedorNav = styled.div`
  margin: 0rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-bottom: 1px solid black;
  background-color: white;
  position: fixed;
  overflow: hidden;
`;

export const Null = styled.span`
  margin: 1rem;
  padding: 0rem;
`;

export const Nav = styled.nav`
  margin: 1.2rem;
  padding: 0rem;
`;

export const Ul = styled.ul`
  margin: 0rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;

  list-style-type: none;
`;

export const Li = styled.li`
  margin: 0rem;
  padding: 0rem;
  p {
    margin: 0.1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const Img = styled.div`
  margin: 1rem;
  padding: 0rem;
`;
