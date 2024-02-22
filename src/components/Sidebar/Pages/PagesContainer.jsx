import {useCallback, useState} from "react";

import {ItemPages} from "./Item/ItemPages.jsx";


export const PagesContainer = ({routesArr, isOpened}) => {

    const [isSelected, setSelected] = useState(false);

    const goToRoute = useCallback((path) => {
        console.log(`going to "${path.title}"`);
        setSelected((prevState) =>
            prevState === path ? null : path);
    }, [])

    return (
        <div>
            {
                routesArr.map((route) => (
                        <ItemPages
                            key={route.title}
                            route={route}
                            isOpened={isOpened}
                            isSelected={isSelected === route}
                            goToRoute={() => goToRoute(route)}
                        />
                ))
            }
        </div>
    );
};

