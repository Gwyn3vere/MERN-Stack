import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { IoLogoFoursquare } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { BsFillTelephoneFill, BsTwitter, BsPinterest, BsInstagram } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import { BiChevronDown, BiLogInCircle, BiLogOutCircle, BiMenu, BiSearch, BiAdjust } from 'react-icons/bi';
import useActive from './useActive';
import authApi from '~/api/auth';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

const menuList = [
    { id: 1, title: 'Trang chủ', url: `${URL}/` },
    { id: 2, title: 'Giới thiệu', url: `${URL}/gioi-thieu` },
    { id: 3, title: 'Phòng', url: `${URL}/phong` },
    { id: 4, title: 'Dịch vụ', url: `${URL}/dich-vu` },
    { id: 5, title: 'Liên hệ', url: `${URL}/lien-he` },
];

function Header() {
    const { activeId, handleItemClick } = useActive();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        authApi.logout();
        window.location.reload();
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top-bar')}>
                    <div className={cx('contact')}>
                        <p>
                            <TfiEmail className={cx('left-icons')}></TfiEmail> ttphuc.20it6@vku.udn.vn
                        </p>
                        <p>
                            <BsFillTelephoneFill className={cx('left-icons')}></BsFillTelephoneFill> +84 0796140251
                        </p>
                        <p>
                            <IoLocationOutline className={cx('left-icons')}></IoLocationOutline> 97 Tran Anh Tong, Hoa
                            Minh, Lien Chieu, Da Nang
                        </p>
                    </div>
                    <div className={cx('button')}>
                        <div className={cx('platform')}>
                            <p>
                                <FaFacebookF className={cx('right-icons')}></FaFacebookF>
                            </p>
                            <p>
                                <BsTwitter className={cx('right-icons')}></BsTwitter>
                            </p>
                            <p>
                                <BsPinterest className={cx('right-icons')}></BsPinterest>
                            </p>
                            <p>
                                <BsInstagram className={cx('right-icons')}></BsInstagram>
                            </p>
                        </div>
                        <div className={cx('language')}>
                            <div className={cx('change-btn')}>
                                <p>Vietnam</p>
                                <BiChevronDown className={cx('hover')}></BiChevronDown>
                            </div>
                            <div className={cx('change-list')}>
                                <p>English</p>
                                <p>France</p>
                                <p>Germany</p>
                            </div>
                        </div>
                        {user ? (
                            <div className={cx('login-btn')}>
                                <a href={`${URL}/`} onClick={handleLogout}>
                                    <BiLogOutCircle></BiLogOutCircle>
                                </a>
                            </div>
                        ) : (
                            <div className={cx('login-btn')}>
                                <a href={`${URL}/dang-nhap`}>
                                    <BiLogInCircle></BiLogInCircle>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('bot-bar')}>
                    <div className={cx('logo')}>
                        <IoLogoFoursquare className={cx('icon')}></IoLogoFoursquare>
                        <p>
                            <span>Fast</span>Travel
                        </p>
                    </div>
                    <div className={cx('menu')}>
                        {menuList.map((menu) => {
                            return (
                                <div className={cx('button')} key={menu.id} onClick={() => handleItemClick(menu.id)}>
                                    <NavLink to={menu.url} className={cx('link', activeId === menu.id ? 'active' : '')}>
                                        <p> {menu.title} </p>
                                    </NavLink>
                                </div>
                            );
                        })}
                    </div>
                    <div className={cx('options')}>
                        <div className={cx('right-btn')}>
                            <p>
                                <BiSearch></BiSearch>
                            </p>
                        </div>
                        {user ? (
                            <div className={cx('right-btn', 'flex')}>
                                <p>
                                    <RxAvatar></RxAvatar>
                                </p>
                            </div>
                        ) : (
                            <div className={cx('default')}>
                                <div className={cx('right-btn')}>
                                    <p>
                                        <BiAdjust></BiAdjust>
                                    </p>
                                </div>
                                <div className={cx('right-btn')}>
                                    <p>
                                        <BiMenu></BiMenu>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
