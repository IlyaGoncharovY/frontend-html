import './sidebar.scss';

import {useSideBar} from "./Hook/useSideBar.js";
import {Header} from "./HeaderSideBar/Header.jsx";
import {generateContainerClassnames} from "../../assets";
import {PagesContainer} from "./Pages/PagesContainer.jsx";
import {bottomRoutes, routes} from "../../common";

export const Sidebar = () => {

    const {isOpened, toggleSidebar} = useSideBar();

    const containerClassnames = generateContainerClassnames('sidebar', isOpened);

    return (
        <div className={containerClassnames}>
            <Header toggleSidebar={toggleSidebar} isOpened={isOpened}/>
            <div className={'routes-container'}>
                <PagesContainer routesArr={routes} isOpened={isOpened}/>
                <PagesContainer routesArr={bottomRoutes} isOpened={isOpened}/>
            </div>
        </div>
    );
};
