import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { BsFillHouseGearFill, BsFillPersonLinesFill, BsFillBarChartFill } from 'react-icons/bs';
import { MdAccountCircle, MdSpaceDashboard } from 'react-icons/md';
import { ImFoursquare } from 'react-icons/im';
import useActive from './useActive';

const cx = classNames.bind(styles);

const menuList = [
    {
        id: 1,
        title: 'Dashboard',
        name: 'Home page',
        icon: <MdSpaceDashboard></MdSpaceDashboard>,
        url: 'http://localhost:3000/overview',
    },
    {
        id: 2,
        title: 'Dashboard',
        name: 'Tổng quan',
        icon: <MdSpaceDashboard></MdSpaceDashboard>,
        url: 'http://localhost:3000/overview',
    },
    {
        id: 3,
        title: 'Managerment',
        name: 'Quản lí phòng',
        icon: <BsFillHouseGearFill></BsFillHouseGearFill>,
        url: 'http://localhost:3000/room',
    },
    {
        id: 4,
        title: 'Managerment',
        name: 'Quản lí nhân viên',
        icon: <BsFillPersonLinesFill></BsFillPersonLinesFill>,
        url: 'http://localhost:3000/overview',
    },
    {
        id: 5,
        title: 'Managerment',
        name: 'Quản lí tài khoản',
        icon: <MdAccountCircle></MdAccountCircle>,
        url: 'http://localhost:3000/create-room',
    },
    {
        id: 6,
        title: 'Managerment',
        name: 'Thống kê doanh thu',
        icon: <BsFillBarChartFill></BsFillBarChartFill>,
        url: 'http://localhost:3000/create-room',
    },
];
const titleList = [
    { titleId: 1, title: 'Dashboard' },
    { titleId: 2, title: 'Managerment' },
];

function Sidebar() {
    const { activeId, handleItemClick } = useActive();

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('company')}>
                    <div className={cx('logo')}>
                        <ImFoursquare></ImFoursquare>
                    </div>
                    <div className={cx('name')}>
                        <span>Fast</span>Travel
                    </div>
                </div>
                {titleList.map((title) => (
                    <div className={cx('title-bar')} key={title.titleId}>
                        <div className={cx('title')}>
                            <div className={cx('style')}>{title.title}</div>
                        </div>
                        <div className={cx('menu-box')}>
                            {menuList
                                .filter((menu) => menu.title === title.title)
                                .map((menu) => {
                                    return (
                                        <div
                                            className={cx('menu-bar')}
                                            key={menu.id}
                                            onClick={() => handleItemClick(menu.id)}
                                        >
                                            <a
                                                className={cx('link', activeId === menu.id ? 'active' : '')}
                                                href={menu.url}
                                            >
                                                <div className={cx('icon-bar')}> {menu.icon} </div>
                                                <div className={cx('text-bar', 'text')}>{menu.name}</div>
                                            </a>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Sidebar;
