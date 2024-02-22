import React, {memo} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import logo from "../../../assets/logo.png";
import {generateContainerClassnames} from "../../../assets";

import './header.scss'

export const Header = memo(({toggleSidebar, isOpened}) => {

    const containerClassnames = generateContainerClassnames('button-container', isOpened);

    return (
        <div className={'containerHeader'}>
            <div className={containerClassnames}>
                <button onClick={toggleSidebar} className={'buttonHeader'}>
                    <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'}/>
                </button>
            </div>
            <img src={logo} alt="TensorFlow logo" className={'img'}/>
            {isOpened && (
                <>
                    <span className={'titleHeader'}>TensorFlow</span>
                </>
            )}
        </div>
    );
});
