import './sidebar.scss';
import {useCallback, useState} from 'react';

import {Header} from "./HeaderSideBar/Header.jsx";
import {generateContainerClassnames} from "../../assets";
import {PagesContainer} from "./Pages/PagesContainer.jsx";

const routes = [
    {title: 'Home', icon: 'fas-solid fa-house', path: '/'},
    {title: 'Sales', icon: 'chart-line', path: '/sales'},
    {title: 'Costs', icon: 'chart-column', path: '/costs'},
    {title: 'Payments', icon: 'wallet', path: '/payments'},
    {title: 'Finances', icon: 'chart-pie', path: '/finances'},
    {title: 'Messages', icon: 'envelope', path: '/messages'},
];

const bottomRoutes = [
    {title: 'Settings', icon: 'sliders', path: '/settings'},
    {title: 'Support', icon: 'phone-volume', path: '/support'},
];

export const Sidebar = () => {

    const [isOpened, setIsOpen] = useState(true)

    const toggleSidebar = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

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
