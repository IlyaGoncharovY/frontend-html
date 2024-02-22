import {ItemPages} from "./Item/ItemPages.jsx";
import {usePagesContainer} from "./Hook/usePagesContainer.js";

export const PagesContainer = ({routesArr, isOpened}) => {

    const { isSelected, goToRoute} = usePagesContainer()

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

