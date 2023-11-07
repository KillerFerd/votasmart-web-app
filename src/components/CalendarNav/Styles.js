import styled from "styled-components";

export const Container = styled.div`
  margin: 0rem;
  padding: 0rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: fixed;
  overflow: hidden;
  padding-right: 6rem;
  padding-bottom: 4rem;
`;

export const Nav = styled.nav`
  margin: 0rem;
  padding: 0.6rem;
  background-color: white;

  border-radius: 12px;
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
    padding: 0.4rem;
  }
`;