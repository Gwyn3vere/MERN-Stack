import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { AiOutlineHome, AiOutlineHeart, AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { BiLogIn } from 'react-icons/bi';
import useActive from './useActive';
import { NavLink } from 'react-router-dom';
// import authApi from '~/api/auth';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

const menuListLogout = [
    { id: 1, title: 'Home', icon: <AiOutlineHome />, url: `${URL}/` },
    { id: 2, title: 'Search', icon: <AiOutlineSearch />, url: `${URL}/phong` },
    { id: 3, title: 'Love', icon: <AiOutlineHeart />, url: `${URL}/phong` },
    { id: 4, title: 'Notification', icon: <AiOutlineBell />, url: `${URL}/phong` },
    { id: 5, title: 'Login', icon: <RxAvatar />, url: `${URL}/cai-dat` },
];

const menuListLogin = [
    { id: 1, title: 'Home', icon: <AiOutlineHome />, url: `${URL}/` },
    { id: 2, title: 'Search', icon: <AiOutlineSearch />, url: `${URL}/phong` },
    { id: 3, title: 'Love', icon: <AiOutlineHeart />, url: `${URL}/phong` },
    { id: 4, title: 'Notification', icon: <AiOutlineBell />, url: `${URL}/phong` },
    { id: 5, title: 'Login', icon: <BiLogIn />, url: `${URL}/dang-nhap` },
];

function HeaderMB() {
    const { activeId, handleItemClick } = useActive();

    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                {user ? (
                    <div className={cx('platform-mb')}>
                        {menuListLogout.map((menu) => {
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
                ) : (
                    <div className={cx('platform-mb')}>
                        {menuListLogin.map((menu) => {
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
                )}
            </div>
        </header>
    );
}

export default HeaderMB;
