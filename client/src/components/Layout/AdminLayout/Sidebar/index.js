import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { BsFillHouseGearFill, BsFillPersonLinesFill, BsFillBarChartFill } from 'react-icons/bs';
import { MdAccountCircle, MdSpaceDashboard } from 'react-icons/md';
// import { ImFoursquare } from 'react-icons/im';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import useActive from './useActive';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

const menuList = [
    {
        id: 1,
        name: 'Tổng quan',
        icon: <MdSpaceDashboard></MdSpaceDashboard>,
        url: 'http://localhost:3000/overview',
    },
    {
        id: 2,
        name: 'Quản lí dịch vụ',
        icon: <MdSpaceDashboard></MdSpaceDashboard>,
        url: 'http://localhost:3000/overview',
    },
    {
        id: 3,
        name: 'Quản lí phòng',
        icon: <BsFillHouseGearFill></BsFillHouseGearFill>,
        url: 'http://localhost:3000/room',
    },
    {
        id: 4,
        name: 'Quản lí đơn đặt phòng',
        icon: <BsFillPersonLinesFill></BsFillPersonLinesFill>,
        url: 'http://localhost:3000/overview',
    },
    {
        id: 5,
        name: 'Quản lí tài khoản',
        icon: <MdAccountCircle></MdAccountCircle>,
        url: 'http://localhost:3000/create-room',
    },
    {
        id: 6,
        name: 'Thống kê doanh thu',
        icon: <BsFillBarChartFill></BsFillBarChartFill>,
        url: 'http://localhost:3000/create-room',
    },
];

function Sidebar() {
    const { activeId, handleItemClick } = useActive();
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                {menuList.map((item) => {
                    return (
                        <div className={cx('sidebar')} key={item.id} onClick={() => handleItemClick(item.id)}>
                            <div className={cx('icons')}>
                                <NavLink
                                    to={item.url}
                                    className={cx('link', 'ico', activeId === item.id ? 'active' : '')}
                                >
                                    {item.icon}
                                </NavLink>
                            </div>
                            <div className={cx('menu', isMenuVisible ? 'hide' : '')}>
                                <NavLink
                                    to={item.url}
                                    className={cx('link', 'text', activeId === item.id ? 'active' : '')}
                                >
                                    {item.name}
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
                <hr />
                <div onClick={toggleMenu} className={cx('sidebar')}>
                    <div className={cx('icons')}>
                        <RiArrowLeftRightFill className={cx('toggle')}></RiArrowLeftRightFill>
                    </div>
                    <div className={cx('menu', isMenuVisible ? 'hide' : '')}>
                        <p className={cx('toggle-text')}>Phóng to/thu nhỏ menu</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
