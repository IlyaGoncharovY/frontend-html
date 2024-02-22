import React, {memo} from 'react';
import logo from "../../../assets/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './header.scss'
import {generateContainerClassnames} from "../../../assets";

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
