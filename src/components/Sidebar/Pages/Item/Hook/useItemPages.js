import {useState} from "react";


/**
 * custom hook for ItemPages.jsx
 * @return {{isHovered: boolean, onMouseEnterHandler: (function(): void), onMouseLeaveHandler: (function(): void)}}
 */
export const useItemPages = () => {

    const [isHovered, setHovered] = useState(false);

    const onMouseEnterHandler = () => setHovered(true);

    const onMouseLeaveHandler = () => setHovered(false);

    return {
        isHovered, onMouseLeaveHandler, onMouseEnterHandler
    };
};
