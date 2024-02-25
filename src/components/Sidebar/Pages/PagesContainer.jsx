import {ItemPages} from "./Item/ItemPages.jsx";
import {usePagesContainer} from "./Hook/usePagesContainer.js";

import './pagesContainer.scss';

export const PagesContainer = ({routesArr, isOpened}) => {

    const { isSelected, goToRoute} = usePagesContainer()

    return (
        <div className={'pagesContainer'}>
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

