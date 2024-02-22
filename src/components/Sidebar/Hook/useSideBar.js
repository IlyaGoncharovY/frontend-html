import {useCallback, useState} from "react";

/**
 * custom hook for SideBar.jsx
 * @return {{isOpened: boolean, toggleSidebar: ((function(): void)|*)}}
 */
export const useSideBar = () => {

    const [isOpened, setIsOpen] = useState(true);

    const toggleSidebar = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    return {
        isOpened, toggleSidebar
    };
};
