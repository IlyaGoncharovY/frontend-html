import React, {memo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {UniversalSpan} from "../../../../common";
import {useItemPages} from "./Hook/useItemPages.js";

import './itemPages.scss'

export const ItemPages = memo((
    {
        route, isOpened, isSelected, goToRoute
    }) => {

    const {isHovered, onMouseEnterHandler, onMouseLeaveHandler} = useItemPages();

    return (
        <div
            key={route.title}
            onClick={goToRoute}
            className={`containerItem ${isSelected ? "selectedItem" : ""}`}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            <div className="descriptionItem">
                <FontAwesomeIcon icon={route.icon}/>
                {isOpened && <UniversalSpan style={'titleItem'} title={route.title}/>}
                {(!isOpened && isHovered) && (
                    <UniversalSpan style={'tooltip'} title={route.title}/>
                )}
            </div>
        </div>
    );
});
