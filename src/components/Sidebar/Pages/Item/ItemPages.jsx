import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {memo} from "react";
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
                {isOpened && <span className={'titleItem'}>{route.title}</span>}
                {(!isOpened && isHovered) && (
                    <span className={'tooltip'}>
                        {route.title}
                    </span>
                )}
            </div>
        </div>
    );
});
