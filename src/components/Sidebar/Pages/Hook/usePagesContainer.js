import {useCallback, useState} from "react";

/**
 * custom hook for PagesContainer.jsx
 * @return {{isSelected: boolean, goToRoute: ((function(*): void)|*)}}
 */
export const usePagesContainer = () => {

    const [isSelected, setSelected] = useState(false);

    const goToRoute = useCallback((path) => {
        console.log(`going to "${path.title}"`);
        setSelected((prevState) =>
            prevState === path ? null : path);
    }, []);


    return {
        isSelected, goToRoute
    };
};
