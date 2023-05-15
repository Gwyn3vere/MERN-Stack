import classNames from 'classnames/bind';
import styles from './Settings.module.scss';
import authApi from '~/api/auth';
import { NavLink } from 'react-router-dom';
import { AiFillIdcard, AiFillCaretRight, AiFillLock, AiFillBell } from 'react-icons/ai';
import { IoShield, IoLanguage } from 'react-icons/io5';
import { MdPolicy, MdWorkHistory, MdOutlineHelp } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { FaFoursquare } from 'react-icons/fa';

const cx = classNames.bind(styles);
const URL = process.env.REACT_APP_ANDRESS_IP;

function Settings() {
    const handleLogout = () => {
        authApi.logout();
        window.location.reload();
    };

    return (
        <main className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('profile')}>
                    <div className={cx('title')}>
                        <p>Tài khoản</p>
                    </div>
                    <div className={cx('account')}>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <AiFillIdcard></AiFillIdcard>
                                </span>
                                <p className={cx('class')}>Tài khoản</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <AiFillLock></AiFillLock>
                                </span>
                                <p className={cx('class')}>Quyền riêng tư</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <IoShield></IoShield>
                                </span>
                                <p className={cx('class')}>Bảo mật</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className={cx('profile')}>
                    <div className={cx('title')}>
                        <p>Thông báo & nội dung</p>
                    </div>
                    <div className={cx('account')}>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <AiFillBell></AiFillBell>
                                </span>
                                <p className={cx('class')}>Thông báo</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <MdPolicy></MdPolicy>
                                </span>
                                <p className={cx('class')}>Chính sách</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <IoLanguage></IoLanguage>
                                </span>
                                <p className={cx('class')}>Ngôn ngữ</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <MdWorkHistory></MdWorkHistory>
                                </span>
                                <p className={cx('class')}>Lịch sử đặt phòng</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className={cx('profile')}>
                    <div className={cx('title')}>
                        <p>Đăng nhập</p>
                    </div>
                    <div className={cx('account')}>
                        <NavLink to={`${URL}/ho-so-ca-nhan`} className={cx('tag')}>
                            <div className={cx('avatar')}>
                                <span>
                                    <MdOutlineHelp></MdOutlineHelp>
                                </span>
                                <p className={cx('class')}>Trợ giúp</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                        <NavLink to={`${URL}/dang-nhap`} className={cx('tag')} onClick={handleLogout}>
                            <div className={cx('avatar')}>
                                <span>
                                    <BiLogOut></BiLogOut>
                                </span>
                                <p className={cx('class')}>Đăng xuất</p>
                            </div>
                            <span>
                                <AiFillCaretRight></AiFillCaretRight>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className={cx('company')}>
                    <div className={cx('hotel')}>
                        <span>
                            <FaFoursquare></FaFoursquare>
                        </span>
                        <p>FastTravel</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Settings;
