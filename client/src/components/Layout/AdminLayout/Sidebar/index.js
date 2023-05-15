import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { BsFillHouseGearFill, BsFillPersonLinesFill, BsFillBarChartFill } from 'react-icons/bs';
import { MdAccountCircle, MdSpaceDashboard } from 'react-icons/md';
import { ImFoursquare } from 'react-icons/im';
import { FaServicestack } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { RiArrowLeftRightFill, RiAdminFill, RiAccountCircleFill } from 'react-icons/ri';
import useActive from './useActive';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

const menuList = [
    {
        id: 1,
        name: 'Tổng quan',
        icon: <MdSpaceDashboard></MdSpaceDashboard>,
        url: `${URL}/overview`,
    },
    {
        id: 2,
        name: 'Dịch vụ',
        icon: <FaServicestack></FaServicestack>,
        url: `${URL}/services`,
    },
    {
        id: 3,
        name: 'Phòng',
        icon: <BsFillHouseGearFill></BsFillHouseGearFill>,
        url: `${URL}/rooms`,
    },
    {
        id: 4,
        name: 'Đơn đặt phòng',
        icon: <BsFillPersonLinesFill></BsFillPersonLinesFill>,
        url: `${URL}/orders`,
    },
    {
        id: 5,
        name: 'Tài khoản',
        icon: <MdAccountCircle></MdAccountCircle>,
        url: `${URL}/accounts`,
    },
    {
        id: 6,
        name: 'Doanh thu',
        icon: <BsFillBarChartFill></BsFillBarChartFill>,
        url: `${URL}/revenue`,
    },
];

const settings = [
    { id: 7, name: 'setting', icon: <AiFillSetting />, url: `${URL}/overview` },
    { id: 8, name: 'account', icon: <RiAccountCircleFill />, url: `${URL}/overview` },
];

function Sidebar() {
    const { activeId, handleItemClick } = useActive();
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const user = JSON.parse(localStorage.getItem('user'));

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('company')}>
                    <span>
                        <ImFoursquare></ImFoursquare>
                    </span>
                    <p className={cx('menu', isMenuVisible ? 'hide' : '')}>
                        <strong>Fast</strong>Travel
                    </p>
                </div>
                <div className={cx('role')}>
                    <div className={cx('box')}>
                        <span>
                            <RiAdminFill></RiAdminFill>
                        </span>
                        <p className={cx('admin', isMenuVisible ? 'hide' : '')}> {user.role} </p>
                    </div>
                </div>
                <hr />
                {menuList.map((item) => {
                    return (
                        <div
                            className={cx('sidebar', activeId === item.id ? 'active' : '')}
                            key={item.id}
                            onClick={() => handleItemClick(item.id)}
                        >
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
                <div onClick={toggleMenu} className={cx('sidebar', 'hidebar')}>
                    <div className={cx('icons')}>
                        <RiArrowLeftRightFill className={cx('toggle')}></RiArrowLeftRightFill>
                    </div>
                    <div className={cx('menu', isMenuVisible ? 'hide' : '')}>
                        <p className={cx('toggle-text')}>Toggle</p>
                    </div>
                </div>
                {settings.map((item) => {
                    return (
                        <div
                            className={cx('sidebar', activeId === item.id ? 'active' : '')}
                            key={item.id}
                            onClick={() => handleItemClick(item.id)}
                        >
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
            </div>
        </aside>
    );
}

export default Sidebar;
