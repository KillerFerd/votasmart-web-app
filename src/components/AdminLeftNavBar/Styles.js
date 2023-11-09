    // Styles.js:
    import styled from "styled-components";

    export const Div = styled.div`
        margin: 0rem;
        padding: 1rem;
    `;

    export const Button = styled.button`
    background-color: ${props => (props.isVisible ? 'white' : 'transparent')};
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 12px;
    font-family: "Sarabun", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: black;
    text-align: center;
    position: fixed;
    transition: ${props => props.isVisible ? 'transform 1.1s ease-in-out, opacity 1s ease-in-out' : 'transform 0.5s ease-in-out, opacity 1s ease-in-out'};
    transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-200%)'};
    opacity: ${props => props.isVisible ? '1' : '0'};
    `;

    export const LeftNavBar = styled.div`
    width: 250px;
    background-color: #265C4B;
    color: #fff;
    padding: 17px;
    display: flex;
    flex-direction: column;
    height: 100vh; 
    position: fixed;
    transition: transform 0.5s ease-in-out; 
    transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(-100%)'}; 
    `;

    export const ButtonNavDiv = styled.div`
        margin: 0rem;
        padding: 0rem;
        display: flex;
        justify-content: flex-end;
    `;

    export const ButtonNav = styled.button`
    background-color: transparent;
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 12px;
    font-family: "Sarabun", sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: white;
    text-align: center;

    &:hover {
        color: #ECBD19;
        transition: 0.5s;
    }
    `;