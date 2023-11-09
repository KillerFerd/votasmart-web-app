// AdminLeftNavBar.jsx:
import React, { useState } from 'react';
import * as Styles from './Styles';

const AdminLeftNavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);;
    };

    return (
        <>
            <Styles.LeftNavBar isVisible={isVisible}>
                <Styles.ButtonNavDiv>
                    <Styles.ButtonNav onClick={toggleVisibility}>X</Styles.ButtonNav>
                </Styles.ButtonNavDiv>
                <ul>
                    <li>Dashboard</li>
                    <li>Torneos</li>
                    <li>Equipos</li>
                    <li>Jugadores</li>
                </ul>
            </Styles.LeftNavBar>
            <Styles.Div>
                <Styles.Button isVisible={!isVisible} onClick={toggleVisibility}>
                    ☰
                </Styles.Button>
            </Styles.Div>
        </>
    );
};

export default AdminLeftNavBar;
