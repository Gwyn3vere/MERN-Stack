import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { AiOutlineHome, AiOutlineHeart, AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import useActive from './useActive';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

const menuList = [
    { id: 1, title: 'Home', icon: <AiOutlineHome />, url: 'http://localhost:3000/' },
    { id: 2, title: 'Search', icon: <AiOutlineSearch />, url: 'http://localhost:3000/phong' },
    { id: 3, title: 'Love', icon: <AiOutlineHeart />, url: 'http://localhost:3000/phong' },
    { id: 4, title: 'Notification', icon: <AiOutlineBell />, url: 'http://localhost:3000/' },
    { id: 5, title: 'Login', icon: <RxAvatar />, url: 'http://localhost:3000/dang-nhap' },
];

function HeaderMB() {
    const { activeId, handleItemClick } = useActive();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('platform-mb')}>
                    {menuList.map((menu) => {
                        return (
                            <div className={cx('button-mb')} key={menu.id} onClick={() => handleItemClick(menu.id)}>
                                <NavLink
                                    to={menu.url}
                                    activeclassname={cx('active')}
                                    className={cx('link', activeId === menu.id ? 'active' : '')}
                                >
                                    <i> {menu.icon} </i>
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

export default HeaderMB;
