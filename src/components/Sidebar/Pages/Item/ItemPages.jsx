import React, {useState, memo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {UniversalSpan} from "../../../../common";

import './itemPages.scss'

export const ItemPages = memo((
    {
        route, isOpened, isSelected, goToRoute
    }) => {

    const [isHovered, setHovered] = useState(false);

    const onMouseEnterHandler = () => setHovered(true);

    const onMouseLeaveHandler = () => setHovered(false);

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
